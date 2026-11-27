#!/usr/bin/env node

/**
 * Writes the results part of README.md, between the BENCHMARK_RESULTS
 * markers, from benchmark-results.json (hyperfine), the installed versions
 * of the tools and the files each tool wrote.
 *
 * benchmark.sh calls it after the timed runs. Every figure in the README
 * comes from here: no tool's name or rank is written by hand.
 *
 * Usage:
 *   node update-readme.js
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const RESULTS_FILE = 'benchmark-results.json';
const README_FILE = 'README.md';
const START = '<!-- BENCHMARK_RESULTS_START -->';
const END = '<!-- BENCHMARK_RESULTS_END -->';
const SPEC_FILE = 'orval-zod/schemas/github-openapi.json';

const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));

/** The version a package.json pins for a dev dependency. */
const toDevVersion = (dir, name) => readJson(path.join(dir, 'package.json')).devDependencies[name].replace(/^[\^~]/, '');

/** The Skmtc CLI version benchmark.sh runs, and the generator the project pins. */
const toSkmtcVersions = () => {
  const cli = fs.readFileSync('benchmark.sh', 'utf8').match(/@skmtc\/cli@([\d.]+)/);
  const generator = readJson('.skmtc/skmtc-zod/deno.json').imports['@skmtc/gen-zod'].match(/@([\d.]+)$/);

  if (!cli || !generator) {
    throw new Error('No Skmtc version found in benchmark.sh or .skmtc/skmtc-zod/deno.json');
  }

  return `CLI ${cli[1]}, gen-zod ${generator[1]}`;
};

const tools = {
  'skmtc-zod': { label: 'Skmtc', version: toSkmtcVersions, output: 'skmtc-zod-output' },
  'orval-zod': { label: 'Orval', version: () => toDevVersion('orval-zod', 'orval'), output: 'orval-zod/src/gen' },
  'kubb-zod': {
    label: 'Kubb',
    version: () => `${toDevVersion('kubb-zod', 'kubb')}, plugin-zod ${toDevVersion('kubb-zod', '@kubb/plugin-zod')}`,
    output: 'kubb-zod/src/gen',
  },
  'openapi-ts-zod': {
    label: 'Hey API (openapi-ts)',
    version: () => toDevVersion('openapi-ts-zod', '@hey-api/openapi-ts'),
    output: 'openapi-ts-zod/src/client',
  },
};

/** Every .ts file below a folder. */
const toFiles = dir =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
        const full = path.join(dir, entry.name);

        return entry.isDirectory() ? toFiles(full) : full.endsWith('.ts') ? [full] : [];
      })
    : [];

/** What a tool wrote: how many files and how many bytes. */
const toOutput = dir => {
  const files = toFiles(dir);

  return {
    files: files.length,
    bytes: files.reduce((sum, file) => sum + fs.statSync(file).size, 0),
  };
};

const seconds = (value, digits) => `${value.toFixed(digits)}s`;
const megabytes = bytes => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
const count = value => value.toLocaleString('en-US');

if (!fs.existsSync(RESULTS_FILE)) {
  console.error(`Error: ${RESULTS_FILE} not found. Run ./benchmark.sh first.`);
  process.exit(1);
}

const results = readJson(RESULTS_FILE).results.sort((a, b) => a.mean - b.mean);
const fastest = results[0];
const steadiest = [...results].sort((a, b) => a.stddev - b.stddev)[0];
const toTool = result => {
  const tool = tools[result.command];

  if (!tool) {
    throw new Error(`No tool named ${result.command}`);
  }

  return tool;
};
const medals = ['🥇 #1', '🥈 #2', '🥉 #3'];

const findings = [
  `- **Fastest:** ${toTool(fastest).label}, with a mean of **${seconds(fastest.mean, 2)}**`,
  ...results
    .slice(1)
    .map(result => `- ${toTool(result).label} takes **${(result.mean / fastest.mean).toFixed(1)}x** as long (${seconds(result.mean, 2)})`),
  `- **Lowest standard deviation:** ${toTool(steadiest).label} (${seconds(steadiest.stddev, 3)})`,
  '- Each tool writes the same thing: one Zod schema for each component schema of the document',
];

const resultRows = results.map((result, index) =>
  [
    medals[index] || `#${index + 1}`,
    toTool(result).label,
    toTool(result).version(),
    seconds(result.mean, 3),
    seconds(result.min, 3),
    seconds(result.max, 3),
    seconds(result.stddev, 3),
    index === 0 ? '**1.0x** (fastest)' : `${(result.mean / fastest.mean).toFixed(1)}x`,
  ].join(' | ')
);

const outputRows = results.map(result => {
  const output = toOutput(toTool(result).output);

  if (output.files === 0) {
    throw new Error(`${toTool(result).label} has no output in ${toTool(result).output}. Run ./benchmark.sh.`);
  }

  return [toTool(result).label, count(output.files), megabytes(output.bytes)].join(' | ');
});

const chart = execFileSync('node', ['generate-chart.js'], { encoding: 'utf8' }).trimEnd();
const spec = readJson(SPEC_FILE);
const denoVersion = execFileSync('deno', ['--version'], { encoding: 'utf8' }).split('\n')[0].split(' ')[1];
const hyperfineVersion = execFileSync('hyperfine', ['--version'], { encoding: 'utf8' }).trim().split(' ')[1];

const block = `${START}

## Key Findings

${findings.join('\n')}

## Results Summary

| Rank | Tool | Version | Mean | Min | Max | Std Dev | Relative |
|------|------|---------|------|-----|-----|---------|----------|
${resultRows.map(row => `| ${row} |`).join('\n')}

## Performance Visualization

\`\`\`
${chart}
\`\`\`

*Chart generated using [wunderbar](https://github.com/gribnoysup/wunderbar) with partial block characters for precise visualization*

## What each tool writes

Each tool is set to write one Zod schema for each of the document's
${count(Object.keys(spec.components.schemas).length)} component schemas, and nothing for the operations. That is what
Skmtc's \`@skmtc/gen-zod\` writes, and the other three have an option for it.
The layout is each tool's own: Skmtc, Orval and Kubb write a file for each
schema, and Hey API writes one file. Orval writes each schema in full where
the others refer to another schema by name, so its output is larger.

| Tool | Files | Size |
|------|-------|------|
${outputRows.map(row => `| ${row} |`).join('\n')}

### Test Environment

- **Test Specification:** GitHub REST API v3 OpenAPI document (${megabytes(fs.statSync(SPEC_FILE).size)} of JSON, ${count(Object.keys(spec.paths).length)} paths, ${count(Object.keys(spec.components.schemas).length)} component schemas). Each tool reads its own copy of the same file.
- **Iterations:** 10 runs per tool with 1 warmup run, timed by [hyperfine](https://github.com/sharkdp/hyperfine) ${hyperfineVersion}
- **A run** is the whole command a user types, from process start to exit. Each run starts with no output and no lock file from the run before.
- **Machine:** ${os.cpus()[0].model}, ${os.cpus().length} cores, ${Math.round(os.totalmem() / 1024 ** 3)} GB, ${os.platform()} ${os.arch()}
- **Runtimes:** Node.js ${process.version.slice(1)}, Deno ${denoVersion}
- **Last Updated:** ${new Date().toISOString().slice(0, 10)}

${END}`;

const readme = fs.readFileSync(README_FILE, 'utf8');
const from = readme.indexOf(START);
const to = readme.indexOf(END);

if (from === -1 || to === -1 || to < from) {
  throw new Error(`${README_FILE} has no ${START} ... ${END} block`);
}

fs.writeFileSync(README_FILE, `${readme.slice(0, from)}${block}${readme.slice(to + END.length)}`);

console.log(`✅ ${README_FILE} updated`);
console.log(findings.join('\n'));

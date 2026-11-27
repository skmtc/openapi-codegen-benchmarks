#!/usr/bin/env bash

# OpenAPI to Zod code generation benchmarks.
# Compares Skmtc, Orval, Kubb and Hey API (openapi-ts) on one document.

set -e

echo "🔥 Starting OpenAPI to Zod benchmarks..."
echo "Running 10 iterations per tool with 1 warmup run"
echo ""

RESULTS_JSON="benchmark-results.json"

# The Skmtc CLI, pinned to one release and run straight from JSR, so the
# benchmark does not replace a `skmtc` you have installed.
#   --no-config: Deno must not read this repository's package.json.
#   --minimum-dependency-age=0: Deno 2.9+ refuses a release that is less
#     than a day old without it.
SKMTC="deno run --no-config -A --unstable-worker-options --minimum-dependency-age=0 jsr:@skmtc/cli@0.11.0"

# Kubb sends anonymous telemetry over the network unless this is set.
export KUBB_DISABLE_TELEMETRY=1

# Install the Node.js tools
pnpm install

# Run Skmtc once, so that no timed run downloads the CLI or the generator.
$SKMTC generate skmtc-zod .skmtc/skmtc-zod/openapi.json > /dev/null

# Each timed run starts with no output and no lock file from the run before.
# Skmtc and Kubb each keep a record of the files they wrote.
PREPARE='rm -rf skmtc-zod-output orval-zod/src/gen/* kubb-zod/src/gen/* openapi-ts-zod/src/client/* && rm -f .skmtc/skmtc-zod/.settings/generated.lock.json .skmtc/skmtc-zod/.settings/manifest.json kubb-zod/kubb-lock.json'

hyperfine \
  --runs 10 \
  --warmup 1 \
  --export-json "$RESULTS_JSON" \
  --prepare "$PREPARE" \
  -n skmtc-zod "$SKMTC generate skmtc-zod .skmtc/skmtc-zod/openapi.json" \
  -n orval-zod 'cd orval-zod && pnpm generate:api:github' \
  -n kubb-zod 'cd kubb-zod && pnpm generate' \
  -n openapi-ts-zod 'cd openapi-ts-zod && pnpm generate:api'

echo ""
echo "✅ Benchmarks complete!"
echo ""

# The last timed run was Hey API's, and its `--prepare` removed the other
# tools' output. Run each tool once more, so the README can say what each wrote.
echo "📦 Generating each tool's output once more to measure it..."
bash -c "$PREPARE"
$SKMTC generate skmtc-zod .skmtc/skmtc-zod/openapi.json > /dev/null
(cd orval-zod && pnpm generate:api:github > /dev/null)
(cd kubb-zod && pnpm generate > /dev/null)
(cd openapi-ts-zod && pnpm generate:api > /dev/null)

echo "📊 Updating README.md with results..."
node update-readme.js

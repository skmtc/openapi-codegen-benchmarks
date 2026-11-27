# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

A **benchmarking repository** that times six OpenAPI-to-Zod code generation tools on the GitHub REST API v3 OpenAPI document:

- **Skmtc** (`.skmtc/skmtc-zod/`)
- **Orval** (`orval-zod/`)
- **Kubb** (`kubb-zod/`)
- **Hey API, `@hey-api/openapi-ts`** (`openapi-ts-zod/`)
- **typed-openapi** (`typed-openapi-zod/`)
- **openapi-to-zod-schema** (`openapi-to-zod-schema-zod/`)

The figures live in `README.md`, between the `BENCHMARK_RESULTS` markers. `./benchmark.sh` writes that part from the run. Do not type a time, a version, a rank or a size into the README by hand.

## Project Structure

```
openapi-codegen-benchmarks/
├── benchmark.sh            # Installs, times each tool with hyperfine, calls update-readme.js
├── update-readme.js        # Writes the results part of README.md
├── generate-chart.js       # The bar chart, from benchmark-results.json
├── benchmark-results.json  # hyperfine's result of the last run
├── .skmtc/skmtc-zod/       # Skmtc project: deno.json, deno.lock, .settings/skmtc.config.json, openapi.json
├── skmtc-zod-output/       # What Skmtc writes (not committed)
├── orval-zod/              # Orval project
├── kubb-zod/               # Kubb project
├── openapi-ts-zod/         # Hey API project
├── typed-openapi-zod/      # typed-openapi: a package.json with the command, and the input
├── openapi-to-zod-schema-zod/  # openapi-to-zod-schema: the same
└── COMPARISON.md           # A feature comparison from October 2025, kept as it was
```

Each Node.js tool folder is a React+Vite project with `schemas/github-openapi.json` (the input) and its own config file.

## Rules for a fair run

- **One document.** `.skmtc/skmtc-zod/openapi.json` and the five `schemas/github-openapi.json` files are the same bytes. If you replace one, replace all six.
- **Latest versions of every tool**, not only of one. Versions are pinned exactly: in each `package.json`, in `.skmtc/skmtc-zod/deno.json`, and the Skmtc CLI in `benchmark.sh`.
- **Equal work, default options.** Each tool writes one Zod schema for each component schema and nothing for the operations. That is what `@skmtc/gen-zod` writes; the other three have an option for it (see each config file). No other option is set.
- **A run starts clean.** `benchmark.sh` removes each tool's output and lock file before every timed run.
- **A tool is added only if it does the same work**: it is maintained, writes Zod 4, and can be limited to the component schemas. The README lists the tools left out, each with its reason.
- **Say what each tool writes.** `update-readme.js` counts each tool's files and bytes. If a tool's file count is far from the number of component schemas, its config no longer does what the README says.

## Key Commands

```bash
./benchmark.sh                 # The whole benchmark, and the README update

# One tool by hand
deno run --no-config -A --unstable-worker-options jsr:@skmtc/cli@<version> generate skmtc-zod .skmtc/skmtc-zod/openapi.json
(cd orval-zod && pnpm generate:api:github)
(cd kubb-zod && pnpm generate)
(cd openapi-ts-zod && pnpm generate:api)
```

`--no-config` matters for Skmtc: without it Deno reads this repository's `package.json` and fails to find its npm packages.

## Updating a tool

- **Skmtc:** set the CLI version in `benchmark.sh`. To move the generator, run the CLI's `install @skmtc/gen-zod skmtc-zod` and commit `.skmtc/skmtc-zod/deno.json` and `deno.lock`.
- **Orval, Kubb, Hey API:** set the version in the tool's `package.json`, run `pnpm install`, and read the tool's migration notes: Kubb 5 changed its packages and its config.

Generated files are not committed.

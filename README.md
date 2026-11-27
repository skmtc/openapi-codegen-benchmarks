# OpenAPI to Zod Generation Benchmarks

How long six OpenAPI-to-Zod code generation tools take on the **GitHub REST API v3 OpenAPI document**: [Skmtc](https://github.com/skmtc/skmtc), [Orval](https://github.com/orval-labs/orval), [Kubb](https://github.com/kubb-labs/kubb), [Hey API](https://github.com/hey-api/openapi-ts), [typed-openapi](https://github.com/astahmer/typed-openapi) and [openapi-to-zod-schema](https://github.com/3rd/openapi-to-zod-schema).

Everything between the two markers below is written by `./benchmark.sh` from the run itself.

<!-- BENCHMARK_RESULTS_START -->

## Key Findings

- **Fastest:** openapi-to-zod-schema, with a mean of **0.75s**
- typed-openapi takes **2.3x** as long (1.76s)
- Skmtc takes **2.5x** as long (1.88s)
- Kubb takes **3.7x** as long (2.81s)
- Hey API (openapi-ts) takes **3.8x** as long (2.82s)
- Orval takes **4.5x** as long (3.38s)
- **Lowest standard deviation:** openapi-to-zod-schema (0.042s)
- Each tool writes the same thing: one Zod schema for each component schema of the document

## Results Summary

| Rank | Tool | Version | Mean | Min | Max | Std Dev | Relative |
|------|------|---------|------|-----|-----|---------|----------|
| 🥇 #1 | openapi-to-zod-schema | 2.1.0 | 0.750s | 0.661s | 0.793s | 0.042s | **1.0x** (fastest) |
| 🥈 #2 | typed-openapi | 4.1.0 | 1.761s | 1.684s | 1.843s | 0.052s | 2.3x |
| 🥉 #3 | Skmtc | CLI 0.11.0, gen-zod 0.4.11 | 1.877s | 1.677s | 2.266s | 0.174s | 2.5x |
| #4 | Kubb | 5.28.1, plugin-zod 5.13.3 | 2.810s | 2.668s | 3.127s | 0.142s | 3.7x |
| #5 | Hey API (openapi-ts) | 0.99.0 | 2.825s | 2.574s | 2.976s | 0.120s | 3.8x |
| #6 | Orval | 8.49.0 | 3.377s | 2.985s | 4.093s | 0.392s | 4.5x |

## Performance Visualization

```
🚀 Generation Time Comparison (lower is better)

openapi-to-zod-schema 0.75s   █████████▍ 1.0x
typed-openapi-zod     1.76s   ██████████████████████▏ 2.3x
skmtc-zod             1.88s   ███████████████████████▌ 2.5x
kubb-zod              2.81s   ███████████████████████████████████▎ 3.7x
openapi-ts-zod        2.82s   ███████████████████████████████████▍ 3.8x
orval-zod             3.38s   ██████████████████████████████████████████▎ 4.5x
                              ◺ 0.00                                      4.00 ◿
```

*Chart generated using [wunderbar](https://github.com/gribnoysup/wunderbar) with partial block characters for precise visualization*

## What each tool writes

Each tool is set to write one Zod schema for each of the document's
870 component schemas, and nothing for the operations. That is what
Skmtc's `@skmtc/gen-zod` and openapi-to-zod-schema write, and the others
have options for it. The layout is each tool's own: Skmtc, Orval and Kubb
write a file for each schema, and the rest write one file of schemas.
typed-openapi also writes a file of type declarations beside it. Orval writes
each schema in full where the others refer to another schema by name, so its
output is larger.

| Tool | Files | Size |
|------|-------|------|
| openapi-to-zod-schema | 1 | 1.4 MB |
| typed-openapi | 2 | 3.9 MB |
| Skmtc | 870 | 1.3 MB |
| Kubb | 877 | 2.5 MB |
| Hey API (openapi-ts) | 1 | 1.8 MB |
| Orval | 871 | 9.3 MB |

### Test Environment

- **Test Specification:** GitHub REST API v3 OpenAPI document (11.1 MB of JSON, 737 paths, 870 component schemas). Each tool reads its own copy of the same file.
- **Iterations:** 10 runs per tool with 1 warmup run, timed by [hyperfine](https://github.com/sharkdp/hyperfine) 1.19.0
- **A run** is the whole command a user types, from process start to exit. Each run starts with no output and no lock file from the run before.
- **Machine:** Apple M1 Max, 10 cores, 32 GB, darwin arm64
- **Runtimes:** Node.js 24.13.1, Deno 2.9.8
- **Last Updated:** 2026-11-27

<!-- BENCHMARK_RESULTS_END -->

## How to Run

Run the benchmarks yourself:

```bash
./benchmark.sh
```

The script:
- Installs the Node.js tools with pnpm, and runs the Skmtc CLI straight from JSR at a pinned version (it does not replace a `skmtc` you have installed)
- Times each tool with [hyperfine](https://github.com/sharkdp/hyperfine)
- Draws the chart with [wunderbar](https://github.com/gribnoysup/wunderbar)
- Rewrites the results part of this README, with the versions it ran and what each tool wrote

**Prerequisites:**
- [Node.js](https://nodejs.org/) v22.22+ - Runtime for Orval, Kubb and Hey API, and for the chart
- [pnpm](https://pnpm.io/) - Package manager for the Node.js tools
- [Deno](https://deno.land/) v2.9+ - Runtime for Skmtc
- [hyperfine](https://github.com/sharkdp/hyperfine) - Command-line benchmarking tool

## How each tool is set up

Each tool writes one Zod 4 schema for each component schema of the document, and nothing for the operations. Every other option is the tool's default.

| Tool | Configuration | Command |
|------|---------------|---------|
| **Skmtc** | [`.skmtc/skmtc-zod/`](.skmtc/skmtc-zod/): a project with the published `@skmtc/gen-zod` generator | `skmtc generate skmtc-zod .skmtc/skmtc-zod/openapi.json` |
| **Orval** | [`orval-zod/orval.config.mjs`](orval-zod/orval.config.mjs): `schemas` of type `zod` with no client target, and a filter that reads no operation and keeps every schema | `orval --project github` |
| **Kubb** | [`kubb-zod/kubb.config.ts`](kubb-zod/kubb.config.ts): `pluginZod` with every path excluded | `kubb generate` |
| **Hey API** | [`openapi-ts-zod/openapi-ts.config.ts`](openapi-ts-zod/openapi-ts.config.ts): the `zod` plugin with definitions only | `openapi-ts` |
| **typed-openapi** | [`typed-openapi-zod/package.json`](typed-openapi-zod/package.json): `--runtime zod --schemas-only`, and `--schema .` to keep the schemas no endpoint uses | `typed-openapi` |
| **openapi-to-zod-schema** | [`openapi-to-zod-schema-zod/package.json`](openapi-to-zod-schema-zod/package.json): no option; it reads only the component schemas | `openapi-to-zod-schema` |

### Tools that are not in the benchmark

- **openapi-zod-client** writes Zod 3, writes an API client with the schemas unless it is given a template of your own, and its last release is from February 2025.
- **@cerios/openapi-to-zod** says on each run that it has moved to a paid license and that the open package will be removed.
- **openapi-zod** has had no release since 2023.
- **openapi-typescript**, **swagger-typescript-api**, **oazapfts** and **@rtk-query/codegen-openapi** write TypeScript types or clients, and no Zod schemas.

## About the Tools

| Tool | Description | Links |
|------|-------------|-------|
| **Skmtc** | Deno-based code generator with cloneable generators | [GitHub](https://github.com/skmtc/skmtc) • [JSR](https://jsr.io/@skmtc/cli) • [Docs](https://skmtc.dev/) |
| **Orval** | OpenAPI client and schema generator | [GitHub](https://github.com/orval-labs/orval) • [Docs](https://orval.dev/) |
| **Kubb** | Plugin-based OpenAPI code generator | [GitHub](https://github.com/kubb-labs/kubb) • [Docs](https://kubb.dev/) |
| **Hey API** | TypeScript client and schema generator (`@hey-api/openapi-ts`) | [GitHub](https://github.com/hey-api/openapi-ts) • [Docs](https://heyapi.dev/) |
| **typed-openapi** | Typed client generator with a choice of validation runtime | [GitHub](https://github.com/astahmer/typed-openapi) |
| **openapi-to-zod-schema** | Component schemas to Zod, and nothing else | [GitHub](https://github.com/3rd/openapi-to-zod-schema) |

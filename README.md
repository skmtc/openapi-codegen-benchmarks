# OpenAPI to Zod Generation Benchmarks

How long six OpenAPI-to-Zod code generation tools take on the **GitHub REST API v3 OpenAPI document**: [Skmtc](https://github.com/skmtc/skmtc), [Orval](https://github.com/orval-labs/orval), [Kubb](https://github.com/kubb-labs/kubb), [Hey API](https://github.com/hey-api/openapi-ts), [typed-openapi](https://github.com/astahmer/typed-openapi) and [openapi-to-zod-schema](https://github.com/3rd/openapi-to-zod-schema).

Everything between the two markers below is written by `./benchmark.sh` from the run itself.

<!-- BENCHMARK_RESULTS_START -->

## Key Findings

- **Fastest:** openapi-to-zod-schema, with a mean of **0.68s**
- Skmtc takes **1.9x** as long (1.29s)
- typed-openapi takes **2.6x** as long (1.75s)
- Hey API (openapi-ts) takes **3.7x** as long (2.53s)
- Kubb takes **3.8x** as long (2.55s)
- Orval takes **4.0x** as long (2.73s)
- **Lowest standard deviation:** openapi-to-zod-schema (0.014s)
- Each tool writes the same thing: one Zod schema for each component schema of the document

## Results Summary

| Rank | Tool | Version | Mean | Min | Max | Std Dev | Relative |
|------|------|---------|------|-----|-----|---------|----------|
| 🥇 #1 | openapi-to-zod-schema | 2.1.0 | 0.677s | 0.659s | 0.701s | 0.014s | **1.0x** (fastest) |
| 🥈 #2 | Skmtc | CLI 0.12.4, gen-zod 0.6.1 | 1.285s | 1.203s | 1.439s | 0.069s | 1.9x |
| 🥉 #3 | typed-openapi | 4.1.0 | 1.750s | 1.665s | 1.823s | 0.050s | 2.6x |
| #4 | Hey API (openapi-ts) | 0.99.0 | 2.532s | 2.462s | 2.705s | 0.075s | 3.7x |
| #5 | Kubb | 5.28.1, plugin-zod 5.13.3 | 2.547s | 2.466s | 2.717s | 0.072s | 3.8x |
| #6 | Orval | 8.49.0 | 2.734s | 2.654s | 2.806s | 0.048s | 4.0x |

## Performance Visualization

```
🚀 Generation Time Comparison (lower is better)

openapi-to-zod-schema 0.68s   ███████████▍ 1.0x
skmtc-zod             1.29s   █████████████████████▌ 1.9x
typed-openapi-zod     1.75s   █████████████████████████████▎ 2.6x
openapi-ts-zod        2.53s   ██████████████████████████████████████████▎ 3.7x
kubb-zod              2.55s   ██████████████████████████████████████████▌ 3.8x
orval-zod             2.73s   █████████████████████████████████████████████▋ 4.0x
                              ◺ 0.00                                      3.00 ◿
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
| Skmtc | 870 | 1.3 MB |
| typed-openapi | 2 | 3.9 MB |
| Hey API (openapi-ts) | 1 | 1.8 MB |
| Kubb | 877 | 2.5 MB |
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

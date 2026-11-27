# OpenAPI to Zod Generation Benchmarks

How long four OpenAPI-to-Zod code generation tools take on the **GitHub REST API v3 OpenAPI document**: [Skmtc](https://github.com/skmtc/skmtc), [Orval](https://github.com/orval-labs/orval), [Kubb](https://github.com/kubb-labs/kubb) and [Hey API](https://github.com/hey-api/openapi-ts).

Everything between the two markers below is written by `./benchmark.sh` from the run itself.

<!-- BENCHMARK_RESULTS_START -->

## Key Findings

- **Fastest:** Skmtc, with a mean of **2.11s**
- Orval takes **1.5x** as long (3.21s)
- Kubb takes **1.6x** as long (3.36s)
- Hey API (openapi-ts) takes **1.6x** as long (3.44s)
- **Lowest standard deviation:** Skmtc (0.088s)
- The tools do not write the same set of schemas: see [What each tool writes](#what-each-tool-writes)

## Results Summary

| Rank | Tool | Version | Mean | Min | Max | Std Dev | Relative |
|------|------|---------|------|-----|-----|---------|----------|
| 🥇 #1 | Skmtc | CLI 0.11.0, gen-zod 0.4.11 | 2.109s | 1.996s | 2.284s | 0.088s | **1.0x** (fastest) |
| 🥈 #2 | Orval | 8.49.0 | 3.209s | 3.011s | 3.750s | 0.218s | 1.5x |
| 🥉 #3 | Kubb | 5.28.1, plugin-zod 5.13.3 | 3.356s | 2.782s | 4.065s | 0.419s | 1.6x |
| #4 | Hey API (openapi-ts) | 0.99.0 | 3.437s | 3.216s | 3.677s | 0.152s | 1.6x |

## Performance Visualization

```
🚀 Generation Time Comparison (lower is better)

skmtc-zod       2.11s   ██████████████████████████▍ 1.0x
orval-zod       3.21s   ████████████████████████████████████████▏ 1.5x
kubb-zod        3.36s   ██████████████████████████████████████████ 1.6x
openapi-ts-zod  3.44s   ███████████████████████████████████████████ 1.6x
                        ◺ 0.00                                      4.00 ◿
```

*Chart generated using [wunderbar](https://github.com/gribnoysup/wunderbar) with partial block characters for precise visualization*

## What each tool writes

| Tool | Files | Size | Exported schemas |
|------|-------|------|------------------|
| Skmtc | 870 | 1.3 MB | 870 |
| Orval | 1 | 5.5 MB | 6,159 |
| Kubb | 1 | 4.2 MB | 10,859 |
| Hey API (openapi-ts) | 1 | 2.2 MB | 3,840 |

The tools do not write the same set of schemas, so the times do not compare
equal work. Skmtc's `@skmtc/gen-zod` writes one file for each component schema
of the document. Orval, Kubb and Hey API each write one file, with schemas for
the parameters, the request body and the responses of each operation. Kubb and
Hey API write the component schemas too.

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

Each tool writes Zod 4 schemas and nothing else, with its default options.

| Tool | Configuration | Command |
|------|---------------|---------|
| **Skmtc** | [`.skmtc/skmtc-zod/`](.skmtc/skmtc-zod/): a project with the published `@skmtc/gen-zod` generator | `skmtc generate skmtc-zod .skmtc/skmtc-zod/openapi.json` |
| **Orval** | [`orval-zod/orval.config.mjs`](orval-zod/orval.config.mjs): `client: 'zod'`, `mode: 'single'` | `orval --project github` |
| **Kubb** | [`kubb-zod/kubb.config.ts`](kubb-zod/kubb.config.ts): `pluginZod` with one output file | `kubb generate` |
| **Hey API** | [`openapi-ts-zod/openapi-ts.config.ts`](openapi-ts-zod/openapi-ts.config.ts): the `zod` plugin with requests, responses and definitions | `openapi-ts` |

## About the Tools

| Tool | Description | Links |
|------|-------------|-------|
| **Skmtc** | Deno-based code generator with cloneable generators | [GitHub](https://github.com/skmtc/skmtc) • [JSR](https://jsr.io/@skmtc/cli) • [Docs](https://skmtc.dev/) |
| **Orval** | OpenAPI client and schema generator | [GitHub](https://github.com/orval-labs/orval) • [Docs](https://orval.dev/) |
| **Kubb** | Plugin-based OpenAPI code generator | [GitHub](https://github.com/kubb-labs/kubb) • [Docs](https://kubb.dev/) |
| **Hey API** | TypeScript client and schema generator (`@hey-api/openapi-ts`) | [GitHub](https://github.com/hey-api/openapi-ts) • [Docs](https://heyapi.dev/) |

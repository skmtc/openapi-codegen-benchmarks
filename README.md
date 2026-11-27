# OpenAPI to Zod Generation Benchmarks

How long four OpenAPI-to-Zod code generation tools take on the **GitHub REST API v3 OpenAPI document**: [Skmtc](https://github.com/skmtc/skmtc), [Orval](https://github.com/orval-labs/orval), [Kubb](https://github.com/kubb-labs/kubb) and [Hey API](https://github.com/hey-api/openapi-ts).

Everything between the two markers below is written by `./benchmark.sh` from the run itself.

<!-- BENCHMARK_RESULTS_START -->

## Key Findings

- **Fastest:** Skmtc, with a mean of **1.52s**
- Hey API (openapi-ts) takes **1.7x** as long (2.58s)
- Kubb takes **1.7x** as long (2.59s)
- Orval takes **1.8x** as long (2.74s)
- **Lowest standard deviation:** Skmtc (0.043s)
- Each tool writes the same thing: one Zod schema for each component schema of the document

## Results Summary

| Rank | Tool | Version | Mean | Min | Max | Std Dev | Relative |
|------|------|---------|------|-----|-----|---------|----------|
| 🥇 #1 | Skmtc | CLI 0.11.0, gen-zod 0.4.11 | 1.524s | 1.462s | 1.594s | 0.043s | **1.0x** (fastest) |
| 🥈 #2 | Hey API (openapi-ts) | 0.99.0 | 2.581s | 2.446s | 2.905s | 0.152s | 1.7x |
| 🥉 #3 | Kubb | 5.28.1, plugin-zod 5.13.3 | 2.588s | 2.457s | 2.739s | 0.086s | 1.7x |
| #4 | Orval | 8.49.0 | 2.737s | 2.618s | 2.952s | 0.085s | 1.8x |

## Performance Visualization

```
🚀 Generation Time Comparison (lower is better)

skmtc-zod       1.52s   █████████████████████████▌ 1.0x
openapi-ts-zod  2.58s   ███████████████████████████████████████████▏ 1.7x
kubb-zod        2.59s   ███████████████████████████████████████████▎ 1.7x
orval-zod       2.74s   █████████████████████████████████████████████▋ 1.8x
                        ◺ 0.00                                      3.00 ◿
```

*Chart generated using [wunderbar](https://github.com/gribnoysup/wunderbar) with partial block characters for precise visualization*

## What each tool writes

Each tool is set to write one Zod schema for each of the document's
870 component schemas, and nothing for the operations. That is what
Skmtc's `@skmtc/gen-zod` writes, and the other three have an option for it.
The layout is each tool's own: Skmtc, Orval and Kubb write a file for each
schema, and Hey API writes one file. Orval writes each schema in full where
the others refer to another schema by name, so its output is larger.

| Tool | Files | Size |
|------|-------|------|
| Skmtc | 870 | 1.3 MB |
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

## About the Tools

| Tool | Description | Links |
|------|-------------|-------|
| **Skmtc** | Deno-based code generator with cloneable generators | [GitHub](https://github.com/skmtc/skmtc) • [JSR](https://jsr.io/@skmtc/cli) • [Docs](https://skmtc.dev/) |
| **Orval** | OpenAPI client and schema generator | [GitHub](https://github.com/orval-labs/orval) • [Docs](https://orval.dev/) |
| **Kubb** | Plugin-based OpenAPI code generator | [GitHub](https://github.com/kubb-labs/kubb) • [Docs](https://kubb.dev/) |
| **Hey API** | TypeScript client and schema generator (`@hey-api/openapi-ts`) | [GitHub](https://github.com/hey-api/openapi-ts) • [Docs](https://heyapi.dev/) |

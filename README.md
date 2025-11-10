# OpenAPI to Zod Generation Benchmarks

Performance comparison of popular OpenAPI-to-Zod code generation tools using the **GitHub REST API v3 OpenAPI specification** (11.1MB JSON file).

## 🏆 Key Findings

- **Fastest:** [skmtc](https://github.com/scmtc/skmtc) generates schemas in **0.51s**
- **Speedup:** skmtc is **22.9x faster** than openapi-ts and **9.5x faster** than orval-zod
- **Most Consistent:** skmtc has the lowest standard deviation (0.014s)

<!-- BENCHMARK_RESULTS_START -->

## Results Summary

| Rank | Framework | Mean Time | Min Time | Max Time | Std Dev | Relative Speed |
|------|-----------|-----------|----------|----------|---------|----------------|
| 🥇 #1 | skmtc-zod | 0.505s | 0.47s | 0.520s | 0.014s | **1.0x** (baseline) |
| 🥈 #2 | orval-zod | 4.789s | 4.71s | 4.884s | 0.062s | 9.5x slower |
| 🥉 #3 | kubb-zod | 7.474s | 7.29s | 7.638s | 0.110s | 14.8x slower |
| #4 | openapi-ts-zod | 11.565s | 11.30s | 12.064s | 0.251s | 22.9x slower |

## Performance Visualization

```
🚀 Generation Time Comparison (lower is better)

skmtc-zod      0.51s  ██▏ 1.0x
orval-zod      4.79s  ████████████████████ 9.5x
kubb-zod       7.47s  ███████████████████████████████▎ 14.8x
openapi-ts-zod 11.57s  ████████████████████████████████████████████████▎ 22.9x
                        ◺ 0.00                                     12.00 ◿
```

*Chart generated using [wunderbar](https://github.com/gribnoysup/wunderbar) with partial block characters for precise visualization*

### Test Environment

- **Test Specification:** GitHub REST API v3 OpenAPI spec (11.1MB JSON)
- **Iterations:** 10 runs per tool with 1 warmup run
- **Last Updated:** 2025-11-10

<!-- BENCHMARK_RESULTS_END -->

## How to Run

Run the benchmarks yourself:

```bash
./benchmark.sh
```

The script automatically:
- Runs benchmarks with [hyperfine](https://github.com/sharkdp/hyperfine)
- Generates performance charts using [wunderbar](https://github.com/gribnoysup/wunderbar)
- Updates README.md with latest results and visualizations

**Prerequisites:**
- [Node.js](https://nodejs.org/) v16+ - Runtime for chart generation
- [hyperfine](https://github.com/sharkdp/hyperfine) - Command-line benchmarking tool
- [jq](https://stedolan.github.io/jq/) - JSON processor
- [pnpm](https://pnpm.io/) - Package manager (for Node.js tools)
- [Deno](https://deno.land/) - Runtime (for skmtc)

## About the Tools

| Tool | Description | Links |
|------|-------------|-------|
| **skmtc** | Deno-native OpenAPI code generator with Zod support | [GitHub](https://github.com/scmtc/skmtc) • [JSR](https://jsr.io/@skmtc/cli) |
| **Orval** | OpenAPI client and schema generator | [GitHub](https://github.com/anymaniax/orval) • [Docs](https://orval.dev/) |
| **Kubb** | Plugin-based OpenAPI code generator | [GitHub](https://github.com/kubb-project/kubb) • [Docs](https://kubb.dev/) |
| **openapi-ts** | TypeScript client and schema generator | [GitHub](https://github.com/hey-api/openapi-ts) • [Docs](https://heyapi.vercel.app/) |

All tools generate [Zod v4](https://github.com/colinhacks/zod) schemas from the same OpenAPI specification.

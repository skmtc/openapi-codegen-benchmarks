# OpenAPI to Zod Generation Benchmarks

Performance comparison of popular OpenAPI-to-Zod code generation tools using the **GitHub REST API v3 OpenAPI specification** (11.1MB JSON file).

## 🏆 Key Findings

- **Fastest:** [skmtc](https://github.com/scmtc/skmtc) generates schemas in **0.78s**
- **Speedup:** skmtc is **14.8x faster** than openapi-ts and **6.2x faster** than orval-zod-zod-zod-zod-zod
- **Most Consistent:** skmtc has the lowest standard deviation (0.022s)

<!-- BENCHMARK_RESULTS_START -->

## Results Summary

| Rank | Framework | Mean Time | Min Time | Max Time | Std Dev | Relative Speed |
|------|-----------|-----------|----------|----------|---------|----------------|
| 🥇 #1 | skmtc-zod | 0.777s | 0.72s | 0.804s | 0.022s | **1.0x** (baseline) |
| 🥈 #2 | orval-zod | 4.841s | 4.76s | 4.922s | 0.051s | 6.2x slower |
| 🥉 #3 | kubb-zod | 7.592s | 7.34s | 7.922s | 0.200s | 9.8x slower |
| #4 | openapi-ts-zod | 11.510s | 11.26s | 11.930s | 0.219s | 14.8x slower |

## Performance Visualization

```mermaid
gantt
    title 🚀 Generation Time Comparison
    dateFormat X
    axisFormat %.1f
    
    section Skmtc
    0.78s :0, 777
    
    section Orval
    4.84s :0, 4841
    
    section Kubb
    7.59s :0, 7592
    
    section openapi-ts
    11.51s :0, 11510
```

### Test Environment

- **Test Specification:** GitHub REST API v3 OpenAPI spec (11.1MB JSON)
- **Iterations:** 10 runs per tool with 1 warmup run
- **Output:** Zod schemas for all models in 1 file
- **Device:** Mac Studio M1 Max, 32GB memory
- **Last Updated:** 2025-11-09

<!-- BENCHMARK_RESULTS_END -->

## How to Run

Run the benchmarks yourself:

```bash
./benchmark.sh
```

**Prerequisites:**
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

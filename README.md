# OpenAPI to Zod Generation Benchmarks

Performance comparison of popular OpenAPI-to-Zod code generation tools using the **GitHub REST API v3 OpenAPI specification** (11.1MB JSON file).

## 🏆 Key Findings

- **Fastest:** [skmtc](https://github.com/scmtc/skmtc) generates schemas in **0.79s**
- **Speedup:** skmtc is **14.5x faster** than openapi-ts and **5.9x faster** than orval-zod-zod
- **Most Consistent:** skmtc has the lowest standard deviation (0.019s)

<!-- BENCHMARK_RESULTS_START -->

## Results Summary

| Rank | Framework | Mean Time | Min Time | Max Time | Std Dev | Relative Speed |
|------|-----------|-----------|----------|----------|---------|----------------|
| 🥇 #1 | skmtc-zod | 0.790s | 0.78s | 0.830s | 0.019s | **1.0x** (baseline) |
| 🥈 #2 | orval-zod | 4.685s | 4.66s | 4.721s | 0.019s | 5.9x slower |
| 🥉 #3 | kubb-zod | 7.354s | 7.21s | 7.569s | 0.114s | 9.3x slower |
| #4 | openapi-ts-zod | 11.480s | 11.26s | 11.790s | 0.204s | 14.5x slower |

## Performance Visualization

```mermaid
gantt
    title 🚀 Generation Time Comparison
    dateFormat X
    axisFormat %Ls
    
    section Skmtc
    0.79s :0, 0
    
    section Orval
    4.69s :0, 4
    
    section Kubb
    7.35s :0, 7
    
    section openapi-ts
    11.48s :0, 11
```

### Test Environment

- **Test Specification:** GitHub REST API v3 OpenAPI spec (11.1MB JSON)
- **Iterations:** 10 runs per tool with 1 warmup run
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

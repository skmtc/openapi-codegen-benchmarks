# OpenAPI to Zod Generation Benchmarks

Performance comparison of popular OpenAPI-to-Zod code generation tools using the **GitHub REST API v3 OpenAPI specification** (11.1MB JSON file).

## 🏆 Key Findings

- **Fastest:** [skmtc](https://github.com/scmtc/skmtc) generates schemas in **0.77s**
- **Speedup:** skmtc is **14.7x faster** than openapi-ts and **6.2x faster** than orval-zod-zod-zod-zod
- **Most Consistent:** skmtc has the lowest standard deviation (0.011s)

<!-- BENCHMARK_RESULTS_START -->

## Results Summary

| Rank | Framework | Mean Time | Min Time | Max Time | Std Dev | Relative Speed |
|------|-----------|-----------|----------|----------|---------|----------------|
| 🥇 #1 | skmtc-zod | 0.767s | 0.74s | 0.777s | 0.011s | **1.0x** (baseline) |
| 🥈 #2 | orval-zod | 4.763s | 4.66s | 4.853s | 0.059s | 6.2x slower |
| 🥉 #3 | kubb-zod | 7.461s | 7.30s | 7.718s | 0.158s | 9.7x slower |
| #4 | openapi-ts-zod | 11.281s | 11.12s | 11.686s | 0.216s | 14.7x slower |

## Performance Visualization

```mermaid
gantt
    title 🚀 Generation Time Comparison
    dateFormat X
    axisFormat %Ls
    
    section Skmtc
    0.77s :0, 0
    
    section Orval
    4.76s :0, 4
    
    section Kubb
    7.46s :0, 7
    
    section openapi-ts
    11.28s :0, 11
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

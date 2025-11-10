# OpenAPI to Zod Generation Benchmarks

Performance comparison of popular OpenAPI-to-Zod code generation tools using the **GitHub REST API v3 OpenAPI specification** (11.1MB JSON file).

## 🏆 Key Findings

- **Fastest:** [skmtc](https://github.com/scmtc/skmtc) generates schemas in **0.41s**
- **Speedup:** skmtc is **27.9x faster** than openapi-ts and **10.5x faster** than orval
- **Most Consistent:** skmtc has the lowest standard deviation (0.011s)

<!-- BENCHMARK_RESULTS_START -->

## Results Summary

| Rank | Framework | Mean Time | Min Time | Max Time | Std Dev | Relative Speed |
|------|-----------|-----------|----------|----------|---------|----------------|
| 🥇 #1 | skmtc-zod | 0.409s | 0.40s | 0.440s | 0.011s | **1.0x** (baseline) |
| 🥈 #2 | orval-zod | 4.311s | 4.21s | 4.528s | 0.093s | 10.5x slower |
| 🥉 #3 | kubb-zod | 6.575s | 6.30s | 6.975s | 0.182s | 16.1x slower |
| #4 | openapi-ts-zod | 11.408s | 10.77s | 12.542s | 0.495s | 27.9x slower |

## Performance Visualization

### Option 1: Unicode Block Bars

```
🚀 Generation Time Comparison (lower is better)

skmtc-zod      0.41s  ███ 1.0x
orval-zod      4.31s  ████████████████████████████████ 10.5x
kubb-zod       6.58s  ████████████████████████████████████████████████ 16.1x
openapi-ts-zod 11.41s ████████████████████████████████████████████████████████████████████████████████████ 27.9x
               └────────────────────────────────────────────────────────────────────────────────────────────┘
               0s                          5s                          10s                         12s
```

### Option 2: HTML Colored Bars

<table>
<tr>
  <td width="140"><strong>skmtc-zod</strong></td>
  <td width="80" align="right">0.41s</td>
  <td><img src="https://via.placeholder.com/30x20/22c55e/22c55e" alt="bar"/><code>1.0x</code></td>
</tr>
<tr>
  <td><strong>orval-zod</strong></td>
  <td align="right">4.31s</td>
  <td><img src="https://via.placeholder.com/315x20/3b82f6/3b82f6" alt="bar"/><code>10.5x</code></td>
</tr>
<tr>
  <td><strong>kubb-zod</strong></td>
  <td align="right">6.58s</td>
  <td><img src="https://via.placeholder.com/483x20/f59e0b/f59e0b" alt="bar"/><code>16.1x</code></td>
</tr>
<tr>
  <td><strong>openapi-ts-zod</strong></td>
  <td align="right">11.41s</td>
  <td><img src="https://via.placeholder.com/837x20/ef4444/ef4444" alt="bar"/><code>27.9x</code></td>
</tr>
</table>

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

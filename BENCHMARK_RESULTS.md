# OpenAPI to Zod Generation Benchmarks

## Results Summary

| Framework | Mean Time | Min Time | Max Time | Std Dev |
|-----------|-----------|----------|----------|---------|
| skmtc-zod | 1.222s | 1.179s | 1.29s | 0.034s |
| orval-zod | 4.813s | 4.744s | 5.115s | 0.109s |
| kubb-zod | 7.614s | 7.391s | 8.544s | 0.357s |
| openapi-ts-zod | 11.568s | 11.302s | 12.096s | 0.334s |

## Performance Visualization

```mermaid
%%{init: {"themeVariables": {"xyChart": {"backgroundColor": "transparent"}}}}%%
xychart-beta horizontal
    title "Mean Generation Time (seconds)"
    x-axis [0, 2, 4, 6, 8, 10, 12, 14]
    y-axis "Framework" ["skmtc-zod", "orval-zod", "kubb-zod", "openapi-ts-zod"]
    bar [1.22,4.81,7.61,11.57]
```

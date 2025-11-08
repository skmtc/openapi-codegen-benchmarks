# OpenAPI to Zod Generation Benchmarks

## Results Summary

| Framework | Mean Time | Min Time | Max Time | Std Dev |
|-----------|-----------|----------|----------|---------|
| skmtc-zod | 1.199s | 1.171s | 1.319s | 0.044s |
| orval-zod | 4.779s | 4.709s | 4.962s | 0.072s |
| openapi-ts-zod | 11.536s | 11.321s | 11.819s | 0.218s |
| kubb-zod | 7.754s | 7.381s | 8.783s | 0.405s |

## Performance Visualization

```mermaid
graph LR
    subgraph "Generation Time (seconds)"
    skmtc-zod    ["<b>skmtc-zod    </b><br/>1.2s"] --> |1.2s| TIME[""]
    orval-zod    ["<b>orval-zod    </b><br/>4.78s"] --> |4.78s| TIME[""]
    kubb-zod     ["<b>kubb-zod     </b><br/>7.75s"] --> |7.75s| TIME[""]
    openapi-ts-zod["<b>openapi-ts-zod</b><br/>11.54s"] --> |11.54s| TIME[""]
    end
    style TIME fill:transparent,stroke:transparent
```

## Relative Performance

```mermaid
%%{init: {"themeVariables": {"xyChart": {"backgroundColor": "transparent"}}}}%%
xychart-beta horizontal
    title "Mean Generation Time (seconds)"
    x-axis [0, 2, 4, 6, 8, 10, 12, 14]
    y-axis "Framework" ["skmtc-zod", "orval-zod", "kubb-zod", "openapi-ts-zod"]
    bar [1.2,4.78,7.75,11.54]
```

#!/usr/bin/env bash

# OpenAPI to Zod Code Generation Benchmarks
# Compares Orval, openapi-ts, Kubb, and Skmtc

set -e

echo "🔥 Starting OpenAPI to Zod benchmarks..."
echo "Running 10 iterations per framework with warmup"
echo ""

# Export results to JSON for processing
RESULTS_JSON="benchmark-results.json"

# Install dependencies
pnpm install

# Install skmtc
deno install -gA --unstable-worker-options jsr:@skmtc/cli@0.0.386 -f

# Bundle the skmtc-zod project
deno run -A .skmtc/skmtc.ts bundle skmtc-zod

hyperfine \
  --runs 10 \
  --warmup 1 \
  --show-output \
  --export-json "$RESULTS_JSON" \
  --prepare 'rm -rf orval-zod/src/gen/* openapi-ts-zod/src/client/* kubb-zod/src/gen/* skmtc-zod-output/*' \
  -n skmtc-zod 'deno run -A --unstable-worker-options .skmtc/skmtc.ts generate skmtc-zod .skmtc/skmtc-zod/openapi.json' \
  -n orval-zod 'cd orval-zod && pnpm generate:api:github' \
  -n kubb-zod 'cd kubb-zod && pnpm generate' \
  -n openapi-ts-zod 'cd openapi-ts-zod && pnpm generate:api'

echo ""
echo "✅ Benchmarks complete!"
echo ""

# Generate markdown results and update README
echo "📊 Updating README.md with results..."
echo ""

README_FILE="README.md"

# Parse JSON and generate content (requires jq)
if command -v jq &> /dev/null; then
    # Get fastest time for relative speed calculation
    FASTEST_TIME=$(jq -r '.results | sort_by(.mean) | .[0].mean' "$RESULTS_JSON")
    FASTEST_NAME=$(jq -r '.results | sort_by(.mean) | .[0].command' "$RESULTS_JSON")
    SLOWEST_TIME=$(jq -r '.results | sort_by(.mean) | .[-1].mean' "$RESULTS_JSON")
    SLOWEST_NAME=$(jq -r '.results | sort_by(.mean) | .[-1].command' "$RESULTS_JSON")

    # Calculate speedup multipliers
    SPEEDUP_VS_SLOWEST=$(echo "$SLOWEST_TIME / $FASTEST_TIME" | bc -l | xargs printf "%.1f")
    SECOND_TIME=$(jq -r '.results | sort_by(.mean) | .[1].mean' "$RESULTS_JSON")
    SECOND_NAME=$(jq -r '.results | sort_by(.mean) | .[1].command' "$RESULTS_JSON")
    SPEEDUP_VS_SECOND=$(echo "$SECOND_TIME / $FASTEST_TIME" | bc -l | xargs printf "%.1f")

    # Get lowest std dev
    LOWEST_STDDEV=$(jq -r '.results | sort_by(.stddev) | .[0].stddev | . * 1000 | round / 1000' "$RESULTS_JSON")

    # Current timestamp
    TIMESTAMP=$(date +"%Y-%m-%d")

    # Create temporary file with new content
    TEMP_CONTENT=$(mktemp)

    # Generate the results section
    cat > "$TEMP_CONTENT" << 'MARKER_EOF'

## Results Summary

| Rank | Framework | Mean Time | Min Time | Max Time | Std Dev | Relative Speed |
|------|-----------|-----------|----------|----------|---------|----------------|
MARKER_EOF

    # Add table rows with ranks and relative speeds
    RANK=1
    MEDALS=("🥇 #1" "🥈 #2" "🥉 #3" "#4")
    jq -r '.results | sort_by(.mean) | .[] | "\(.command)|\(.mean)|\(.min)|\(.max)|\(.stddev)"' "$RESULTS_JSON" | while IFS='|' read -r name mean min max stddev; do
        MEDAL="${MEDALS[$((RANK-1))]}"
        RELATIVE=$(echo "$mean / $FASTEST_TIME" | bc -l | xargs printf "%.1f")

        MEAN_FORMATTED=$(echo "$mean * 1000" | bc -l | xargs printf "%.0f" | awk '{printf "%.3f", $1/1000}')
        MIN_FORMATTED=$(echo "$min * 1000" | bc -l | xargs printf "%.0f" | awk '{printf "%.2f", $1/1000}')
        MAX_FORMATTED=$(echo "$max * 1000" | bc -l | xargs printf "%.0f" | awk '{printf "%.3f", $1/1000}')
        STDDEV_FORMATTED=$(echo "$stddev * 1000" | bc -l | xargs printf "%.0f" | awk '{printf "%.3f", $1/1000}')

        if [ "$RANK" -eq 1 ]; then
            echo "| $MEDAL | $name | ${MEAN_FORMATTED}s | ${MIN_FORMATTED}s | ${MAX_FORMATTED}s | ${STDDEV_FORMATTED}s | **1.0x** (baseline) |" >> "$TEMP_CONTENT"
        else
            echo "| $MEDAL | $name | ${MEAN_FORMATTED}s | ${MIN_FORMATTED}s | ${MAX_FORMATTED}s | ${STDDEV_FORMATTED}s | ${RELATIVE}x slower |" >> "$TEMP_CONTENT"
        fi

        RANK=$((RANK+1))
    done

    # Add visualization using wunderbar
    cat >> "$TEMP_CONTENT" << 'MARKER_EOF'

## Performance Visualization

```
MARKER_EOF

    # Generate chart using wunderbar
    node generate-chart.js >> "$TEMP_CONTENT"

    cat >> "$TEMP_CONTENT" << 'MARKER_EOF'
```

*Chart generated using [wunderbar](https://github.com/gribnoysup/wunderbar) with partial block characters for precise visualization*

### Test Environment

- **Test Specification:** GitHub REST API v3 OpenAPI spec (11.1MB JSON)
- **Iterations:** 10 runs per tool with 1 warmup run
MARKER_EOF

    echo "- **Last Updated:** $TIMESTAMP" >> "$TEMP_CONTENT"
    echo "" >> "$TEMP_CONTENT"

    # Extract content before and after markers
    BEFORE=$(sed -n '1,/<!-- BENCHMARK_RESULTS_START -->/p' "$README_FILE")
    AFTER=$(sed -n '/<!-- BENCHMARK_RESULTS_END -->/,$p' "$README_FILE")

    # Update Key Findings section in BEFORE content
    FASTEST_MEAN=$(echo "$FASTEST_TIME * 100" | bc -l | xargs printf "%.0f" | awk '{printf "%.2f", $1/100}')

    BEFORE=$(echo "$BEFORE" | sed -E "s/generates schemas in \*\*[0-9.]+s\*\*/generates schemas in **${FASTEST_MEAN}s**/")
    BEFORE=$(echo "$BEFORE" | sed -E "s/is \*\*[0-9.]+x faster\*\* than/is **${SPEEDUP_VS_SLOWEST}x faster** than/")
    BEFORE=$(echo "$BEFORE" | sed -E "s/\*\*[0-9.]+x faster\*\* than orval/**${SPEEDUP_VS_SECOND}x faster** than ${SECOND_NAME}/")
    BEFORE=$(echo "$BEFORE" | sed -E "s/standard deviation \([0-9.]+s\)/standard deviation (${LOWEST_STDDEV}s)/")

    # Reconstruct README
    {
        echo "$BEFORE"
        cat "$TEMP_CONTENT"
        echo "$AFTER"
    } > "$README_FILE"

    # Clean up
    rm "$TEMP_CONTENT"

    echo "✅ README.md updated successfully!"
    echo ""
    echo "📊 Results:"
    echo "  🏆 Fastest: $FASTEST_NAME (${FASTEST_MEAN}s)"
    echo "  📈 Speedup: ${SPEEDUP_VS_SLOWEST}x faster than $SLOWEST_NAME"
    echo "  📅 Updated: $TIMESTAMP"
else
    echo "⚠️  jq not found. Install jq to update README.md with results."
    echo "   Raw results available in $RESULTS_JSON"
fi

#!/usr/bin/env bash

# OpenAPI to Zod Code Generation Benchmarks
# Compares Orval, openapi-ts, Kubb, and Skmtc

set -e

echo "🔥 Starting OpenAPI to Zod benchmarks..."
echo "Running 10 iterations per framework with warmup"
echo ""

# Export results to JSON for processing
RESULTS_JSON="benchmark-results.json"

hyperfine \
  --runs 10 \
  --warmup 1 \
  --show-output \
  --export-json "$RESULTS_JSON" \
  --prepare 'rm -rf orval-zod/src/gen/* openapi-ts-zod/src/client/* kubb-zod/src/gen/* skmtc-zod-output/*' \
  -n skmtc-zod 'deno run -A --unstable-worker-options jsr:@skmtc/cli@0.0.381 generate skmtc-zod .skmtc/openapi.json' \
  -n orval-zod 'cd orval-zod && pnpm generate:api:github' \
  -n kubb-zod 'cd kubb-zod && pnpm generate' \
  -n openapi-ts-zod 'cd openapi-ts-zod && pnpm generate:api'

echo ""
echo "✅ Benchmarks complete!"
echo ""

# Generate markdown results
echo "📊 Generating results table and chart..."
echo ""

# Create markdown output
OUTPUT_FILE="BENCHMARK_RESULTS.md"

cat > "$OUTPUT_FILE" << 'EOF'
# OpenAPI to Zod Generation Benchmarks

## Results Summary

EOF

# Extract results and create table
echo "| Framework | Mean Time | Min Time | Max Time | Std Dev |" >> "$OUTPUT_FILE"
echo "|-----------|-----------|----------|----------|---------|" >> "$OUTPUT_FILE"

# Parse JSON and add rows (requires jq)
if command -v jq &> /dev/null; then
    jq -r '.results[] | "| \(.command) | \(.mean | . * 1000 | round / 1000)s | \(.min | . * 1000 | round / 1000)s | \(.max | . * 1000 | round / 1000)s | \(.stddev | . * 1000 | round / 1000)s |"' "$RESULTS_JSON" >> "$OUTPUT_FILE"

    echo "" >> "$OUTPUT_FILE"
    echo "## Performance Visualization" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
    echo '```mermaid' >> "$OUTPUT_FILE"
    echo 'gantt' >> "$OUTPUT_FILE"
    echo '    title Generation Time Comparison (seconds)' >> "$OUTPUT_FILE"
    echo '    dateFormat X' >> "$OUTPUT_FILE"
    echo '    axisFormat %s' >> "$OUTPUT_FILE"
    echo '    section Performance' >> "$OUTPUT_FILE"

    # Generate Gantt chart bars sorted by mean time
    jq -r '.results | sort_by(.mean) | .[] | "    \(.command) (\(.mean | . * 100 | round / 100)s) :0, \(.mean | floor)"' "$RESULTS_JSON" >> "$OUTPUT_FILE"

    echo '```' >> "$OUTPUT_FILE"

    echo ""
    echo "📄 Results saved to $OUTPUT_FILE"
    echo ""
    cat "$OUTPUT_FILE"
else
    echo "⚠️  jq not found. Install jq to generate formatted results."
    echo "   Raw results available in $RESULTS_JSON"
fi

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **benchmarking repository** comparing four OpenAPI-to-Zod code generation tools:
- **Orval** (`orval-zod/`)
- **openapi-ts** (`openapi-ts-zod/`)
- **Kubb** (`kubb-zod/`)
- **Skmtc** (`.skmtc/skmtc-zod/`)

Each tool generates Zod schemas from the GitHub REST API v3 OpenAPI specification (11.1MB JSON file). The repository measures generation speed, output size, and code quality.

## Project Structure

```
openapi-codegen-benchmarks/
├── orval-zod/              # Orval implementation
├── openapi-ts-zod/         # openapi-ts implementation
├── kubb-zod/               # Kubb implementation
├── .skmtc/                 # Skmtc configuration and cache
│   └── skmtc-zod/          # Skmtc project directory
├── skmtc-zod-output/       # Skmtc generated output
├── COMPARISON.md           # Benchmark results and analysis
└── [this-dir]/schemas/     # GitHub OpenAPI spec (per tool)
```

Each tool directory (`orval-zod/`, `openapi-ts-zod/`, `kubb-zod/`) is a standalone React+Vite project with:
- `schemas/github-openapi.json` - Input OpenAPI specification
- `src/gen/` - Generated Zod schemas output
- Tool-specific configuration file

## Key Commands

### Orval (in `orval-zod/`)
```bash
pnpm install
pnpm generate:api              # Generate all APIs (github + petstore)
pnpm generate:api:github       # Generate GitHub API only
pnpm generate:api:petstore     # Generate Petstore API only
pnpm dev                       # Run development server
pnpm build                     # Build for production
```

**Configuration:** `orval.config.mjs`
**Output:** `src/gen/github-zod.ts` (4.5MB, ~5.0s)

### openapi-ts (in `openapi-ts-zod/`)
```bash
pnpm install
pnpm generate:api              # Generate Zod schemas
pnpm dev                       # Run development server
pnpm build                     # Build for production
```

**Configuration:** `openapi-ts.config.ts`
**Output:** `src/client/zod.gen.ts` (2.6MB, ~11.8s)

### Kubb (in `kubb-zod/`)
```bash
pnpm install
pnpm generate                  # Generate Zod schemas
pnpm dev                       # Run development server
pnpm build                     # Build for production
```

**Configuration:** `kubb.config.ts`
**Output:** `src/gen/zod.ts` (3.4MB, ~8.7s)

### Skmtc (Deno-based, no pnpm)
```bash
# Run from repository root
skmtc generate skmtc-zod .skmtc/openapi.json
```

**Configuration:** `.skmtc/skmtc-zod/deno.json`
**Output:** `skmtc-zod-output/types.generated.ts` (1.2MB, ~2.4s)

## Architecture & Design

### Tool Comparison Architecture

Each tool directory is intentionally isolated with duplicate `schemas/` to enable:
1. Independent benchmarking without shared state
2. Parallel generation timing measurements
3. Side-by-side output comparison

### Configuration Patterns

**Orval** uses multi-project ESM config:
- Multiple API targets in one config (`github`, `petstore`)
- `client: 'zod'` for Zod-only output
- `mode: 'single'` for single-file output

**openapi-ts** uses plugin-based TypeScript config:
- Plugin system with `zod` plugin
- Fine-grained control: `requests`, `responses`, `definitions`
- Can generate SDK + types alongside Zod schemas

**Kubb** uses plugin-based TypeScript config:
- Plugin architecture: `pluginOas` + `pluginZod`
- `typed: false` for Zod-only output (no TypeScript types)
- `version: '4'` for Zod v4 compatibility
- `output.path` supports single-file (`zod.ts`) or directory (split mode)

**Skmtc** uses Deno workspace config:
- Deno-native with JSR imports
- Minimal configuration in `deno.json`
- Workspace-based generator at `./gen-zod/`

### Generated Code Characteristics

**Output sizes (single-file mode):**
- Skmtc: 1.2MB (compact, single-line)
- openapi-ts: 2.6MB (multi-line, readable)
- Kubb: 3.4MB (multi-line, readable)
- Orval: 4.5MB (multi-line, readable)

**Code style differences:**
- Skmtc: `z.object({id: z.number()})` - compact, unquoted properties
- openapi-ts: `z.object({id: z.number()})` - readable, unquoted properties
- Kubb: `z.object({"id": z.number()})` - readable, quoted properties
- Orval: `zod.object({"id": zod.number()})` - `zod` namespace, quoted properties

## Benchmarking Workflow

To re-run benchmarks:

1. **Clean previous outputs:**
   ```bash
   rm -rf orval-zod/src/gen/*
   rm -rf openapi-ts-zod/src/client/*
   rm -rf kubb-zod/src/gen/*
   rm -rf skmtc-zod-output/*
   ```

2. **Run each tool with timing:**
   ```bash
   cd orval-zod && time pnpm generate:api:github
   cd openapi-ts-zod && time pnpm generate:api
   cd kubb-zod && time pnpm generate
   cd .. && time skmtc generate skmtc-zod .skmtc/openapi.json
   ```

3. **Measure output sizes:**
   ```bash
   du -h orval-zod/src/gen/github-zod.ts
   du -h openapi-ts-zod/src/client/zod.gen.ts
   du -h kubb-zod/src/gen/zod.ts
   du -h skmtc-zod-output/types.generated.ts
   ```

4. **Update COMPARISON.md** with results

## Runtime & Dependencies

- **Node.js:** v22.16.0 (for Orval, openapi-ts, Kubb)
- **Deno:** Latest (for Skmtc)
- **pnpm:** v10.15.1 (locked via `packageManager` field)
- **Zod:** v4.1.12 (all tools use Zod v4)

## Important Notes

- All three Node.js tools (`orval-zod/`, `openapi-ts-zod/`, `kubb-zod/`) share identical React+Vite boilerplate
- The `schemas/github-openapi.json` file is duplicated in each tool directory (11.1MB each)
- Skmtc uses a different architecture: Deno workspace with separate output directory
- Generated files should NOT be committed (too large, regenerated on-demand)
- The `.skmtc/openapi.json` is the source spec for Skmtc (same as other tools' `schemas/` files)

## Performance Characteristics (from COMPARISON.md)

**Speed ranking:**
1. Skmtc: 2.4s (fastest, Deno-native)
2. Orval: 5.0s (2nd, Node.js)
3. Kubb: 8.7s (3rd, Node.js)
4. openapi-ts: 11.8s (slowest, Node.js)

**Size ranking (smallest to largest):**
1. Skmtc: 1.2MB (compact format)
2. openapi-ts: 2.6MB
3. Kubb: 3.4MB
4. Orval: 4.5MB

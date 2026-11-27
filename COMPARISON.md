# Zod Schema Generator Comparison

> **This page is from October 2025.** Its versions, times, sizes and
> configuration examples are those of that month. The current figures and
> versions are in [README.md](README.md), which `./benchmark.sh` rewrites.

Comprehensive comparison of Orval, openapi-ts, Skmtc, and Kubb for generating Zod schemas from OpenAPI specifications.

**Test Schema:** GitHub REST API v3 OpenAPI spec (11.1MB JSON)

---

## Performance & Output (Zod Only)

| Metric | Kubb | openapi-ts | Orval | Skmtc | Winner |
|--------|------|------------|-------|-------|--------|
| **Average Generation Time** | 8.7s | 11.8s | 5.0s | 2.4s | 🏆 Skmtc (fastest) |
| **Output File Size (Zod)** | 3.4MB | 2.6MB | 4.5MB | 1.2MB | 🏆 Skmtc (smallest) |
| **Total Output Size** | 3.6MB | 2.6MB | 4.5MB | 1.2MB | 🏆 Skmtc (smallest) |
| **Number of Files** | 2 files | 1 file | 1 file | 1 file | openapi-ts/Orval/Skmtc |
| **Output Path** | `src/gen/zod.ts` | `src/client/zod.gen.ts` | `src/gen/github-zod.ts` | `skmtc-zod-output/types.generated.ts` | - |

---

## Configuration

| Feature | Kubb | openapi-ts | Orval | Skmtc |
|---------|------|------------|-------|-------|
| **Config File** | `kubb.config.ts` | `openapi-ts.config.ts` | `orval.config.mjs` | `.skmtc/<project>/deno.json` |
| **Package Name** | `@kubb/cli` + plugins | `@hey-api/openapi-ts` | `orval` | `skmtc` |
| **Version Tested** | 4.4.0 | 0.86.8 | 8.0.0-rc.0 | Latest (Deno) |
| **Config Type** | TypeScript | TypeScript | JavaScript/ESM | JSON |
| **Installation** | `pnpm add -D @kubb/cli @kubb/core @kubb/plugin-oas @kubb/plugin-zod` | `pnpm add -D -E @hey-api/openapi-ts` | `pnpm add -D orval` | `deno install -A jsr:@skmtc/cli` |
| **Runtime** | Node.js | Node.js | Node.js | Deno |
| **Zod Dependency** | `pnpm add zod` | `pnpm add zod` | `pnpm add zod` | Included (Deno) |

---

## Generated Code Style

| Feature | Kubb | openapi-ts | Orval | Skmtc |
|---------|------|------------|-------|-------|
| **Zod Import** | `import { z } from 'zod/v4'` | `import { z } from 'zod'` | `import * as zod from 'zod'` | `import { z } from 'zod'` |
| **Namespace** | Uses `z.object()` | Uses `z.object()` | Uses `zod.object()` | Uses `z.object()` |
| **Property Quotes** | Quoted (`"id"`) | Unquoted (`id:`) | Quoted (`"id"`) | Unquoted (`id:`) |
| **Optional Syntax** | `z.optional(z.number())` | `z.optional(z.number())` | `zod.number().optional()` | `z.number().optional()` |
| **Formatting** | Multi-line, readable | Multi-line, readable | Multi-line, readable | Single-line, compact |
| **TypeScript Integration** | ❌ No | ❌ No | ❌ No | ❌ No |
| **File Organization** | Single file or separate files | Single file | Single file | Single file or separate files |

### Example Output Comparison

**Orval:**
```typescript
export const updatePetBody = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "photoUrls": zod.array(zod.string()),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})
```

**openapi-ts:**
```typescript
export const zRoot = z.object({
    current_user_url: z.string(),
    authorizations_url: z.string(),
    hub_url: z.optional(z.string()),
});

export const zSecurityAdvisoryEcosystems = z.enum([
    'rubygems',
    'npm',
    'pip',
]);
```

**Skmtc:**
```typescript
export const root = z.object({current_user_url: z.string(), current_user_authorizations_html_url: z.string(), authorizations_url: z.string(), code_search_url: z.string(), commit_search_url: z.string(), emails_url: z.string(), emojis_url: z.string(), events_url: z.string(), feeds_url: z.string(), followers_url: z.string(), following_url: z.string(), gists_url: z.string(), hub_url: z.string().optional(), issue_search_url: z.string(), issues_url: z.string(), keys_url: z.string(), label_search_url: z.string(), notifications_url: z.string(), organization_url: z.string(), organization_repositories_url: z.string(), organization_teams_url: z.string(), public_gists_url: z.string(), rate_limit_url: z.string(), repository_url: z.string(), repository_search_url: z.string(), current_user_repositories_url: z.string(), starred_url: z.string(), starred_gists_url: z.string(), topic_search_url: z.string().optional(), user_url: z.string(), user_organizations_url: z.string(), user_repositories_url: z.string(), user_search_url: z.string()});

export const securityAdvisoryEcosystems = z.enum(["rubygems", "npm", "pip", "maven", "nuget", "composer", "go", "rust", "erlang", "actions", "pub", "other", "swift"]);
```

**Kubb:**
```typescript
// File: src/gen/zod/rootSchema.ts
import { z } from "zod/v4";

export const rootSchema = z.object({
    "current_user_url": z.string(),
    "current_user_authorizations_html_url": z.string(),
    "authorizations_url": z.string(),
    "code_search_url": z.string(),
    // ... more properties
    "hub_url": z.optional(z.string()),
    // ... more properties
})
```

---

## Features & Capabilities

| Feature | Kubb | openapi-ts | Orval | Skmtc |
|---------|------|------------|-------|-------|
| **Zod Schema Generation** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **TypeScript Types** | ❌ No (Zod only mode) | ✅ Yes (optional) | ❌ No (Zod only mode) | ❌ No |
| **SDK Generation** | ❌ No | ✅ Yes (optional) | ❌ No | ❌ No |
| **Client Generation** | ❌ No | ✅ Yes (optional) | ❌ No | ❌ No |
| **Request Validation** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Response Validation** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Definitions/Components** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Split Mode** | ✅ Yes (separate files per schema) | ❌ No | ✅ Yes (tags-split, split) | ✅ Yes (separate files per schema) |
| **Single File Mode** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Compact Output** | ❌ No | ❌ No | ❌ No | ✅ Yes (single-line) |
| **Type Integration** | ❌ No | ❌ No | ❌ No | ❌ No |

---

## Timing Details

| Tool | Run 1 | Run 2 | Run 3 | Average |
|------|-------|-------|-------|---------|
| **Kubb** | 8.661s | 8.499s | 8.909s | 8.7s |
| **openapi-ts** | 11.706s | 11.672s | 12.093s | 11.8s |
| **Orval** | 5.135s | 4.827s | 5.138s | 5.0s |
| **Skmtc** | 2.371s | 2.361s | 2.331s | 2.4s |

---

## Configuration Examples

### Orval Configuration

**File:** `orval.config.mjs`

```javascript
import { defineConfig } from 'orval';

export default defineConfig({
  github: {
    input: {
      target: './schemas/github-openapi.json',
    },
    output: {
      client: 'zod',
      mode: 'single',
      target: './src/gen/github-zod.ts',
    },
  },
});
```

### openapi-ts Configuration

**File:** `openapi-ts.config.ts`

```typescript
import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './schemas/github-openapi.json',
  output: 'src/client',
  plugins: [
    {
      name: 'zod',
      requests: true,
      responses: true,
      definitions: true,
    },
  ],
});
```

### Skmtc Configuration

**File:** `.skmtc/skmtc-zod/deno.json`

```json
{
  "imports": {
    "@skmtc/gen-zod": "jsr:@skmtc/gen-zod@^0.1.0"
  }
}
```

**Command:**
```bash
skmtc generate skmtc-zod .skmtc/skmtc-zod/openapi.json
```

### Kubb Configuration

**File:** `kubb.config.ts`

```typescript
import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginZod } from '@kubb/plugin-zod'

export default defineConfig({
  root: '.',
  input: {
    path: './schemas/github-openapi.json',
  },
  output: {
    path: './src/gen',
  },
  plugins: [
    pluginOas({
      output: false, // Disable JSON schema output
    }),
    pluginZod({
      output: {
        path: 'zod.ts', // Single file output
      },
      typed: false,
      dateType: 'stringOffset',
      unknownType: 'unknown',
      version: '4',
    }),
  ],
})
```

**Command:**
```bash
pnpm generate
```

---

## Use Case Recommendations

| Use Case | Recommended Tool | Reason |
|----------|------------------|--------|
| **Fastest generation** | 🏆 Skmtc | 2.4s - Fastest by far (52% faster than Orval) |
| **Smallest bundle size** | 🏆 Skmtc | 1.2MB - Most compact output (54% smaller than openapi-ts) |
| **Large monorepos** | 🏆 Kubb or Skmtc | Separate files per schema for better organization |
| **Future extensibility** | 🏆 openapi-ts | Can add SDK, types, and client later |
| **Deno projects** | 🏆 Skmtc | Native Deno support |
| **Tree-shakeable imports** | 🏆 Kubb or Skmtc | Individual files enable optimal tree-shaking (when using split mode) |
| **Simple single-file output** | 🏆 Skmtc or openapi-ts | Cleanest single-file output (Skmtc: 1.2MB, openapi-ts: 2.6MB) |
| **Plugin-based extensibility** | 🏆 Kubb | Modular plugin architecture for custom generators |

---

## Final Verdict

### Choose Skmtc if:
- 🚀 **Speed is the top priority** (2.4s - fastest by far, 52% faster than Orval)
- 📦 **Smallest possible bundle size** (1.2MB - 54% smaller than openapi-ts)
- 🦕 You're using **Deno** or want Deno support
- ✨ You prefer compact, minified-style output
- 🎯 **Best all-around performance** (fastest AND smallest)
- 📁 Flexibility: supports both single-file and multi-file modes

### Choose Orval if:
- 🎯 **Simple single-file output** is preferred (4.5MB)
- 📁 You need **tag-based split mode** for organization
- 🔧 You prefer **JavaScript/ESM configuration**
- ⚡ Fast generation with readable output (5.0s - second fastest)
- 🛠️ Node.js ecosystem with excellent npm/pnpm integration

### Choose openapi-ts if:
- 🛠️ **Future extensibility** is important (SDK, types, client)
- 📝 You prefer **TypeScript configuration**
- 🔄 You might need SDK generation later
- 📦 Moderate bundle size is acceptable

### Choose Kubb if:
- 🔧 You prefer **plugin-based architecture** for extensibility
- 🎯 You need **flexible output modes** (single file or split mode)
- 🌳 **Tree-shaking** is important (supports separate file per schema)
- 📦 Moderate file size is acceptable (3.4MB - larger than openapi-ts)
- ⚡ Generation time is acceptable (8.7s - third fastest)

---

## Additional Notes

### Skmtc Strengths
- **Speed:** Fastest generation time (2.4s - 52% faster than Orval, 80% faster than openapi-ts)
- **Size:** Smallest output (1.2MB - 54% smaller than openapi-ts, 73% smaller than Orval)
- **Flexibility:** Supports both single-file (1.2MB) and multi-file (870 files) modes
- **Deno-native:** Built for Deno runtime with native TypeScript support
- **Compact format:** Uses single-line compact format for minimal file size
- **Simplicity:** Zero configuration needed for basic usage
- **Best overall:** Only tool that is BOTH fastest AND smallest

### Orval Strengths
- **Speed:** Second fastest (5.0s)
- **Simple output:** Single-file output (4.5MB) for easy integration
- **Flexibility:** Multiple output modes (single, split, tags-split)
- **Organization:** Tag-based split mode for large monorepos
- **Validation options:** Can disable validation for broken schemas
- **Node.js ecosystem:** Excellent npm/pnpm integration

### openapi-ts Strengths
- **Extensibility:** Can enable additional features (SDK, types) when needed
- **Modern tooling:** TypeScript-first configuration
- **Complete solution:** Types + Schemas + SDK in one tool
- **Moderate size:** 2.6MB output balances size and features

### Kubb Strengths
- **Speed:** Third fastest (8.7s)
- **Flexibility:** Supports both single-file (3.4MB) and multi-file modes
- **Plugin Architecture:** Modular, extensible plugin system
- **Configuration:** Highly configurable with transformers and custom generators
- **Output modes:** Can disable JSON schema output for cleaner builds
- **Barrel files:** Automatic index.ts generation for convenient imports

### All Tools Excel At
- ✅ Generating high-quality Zod v4 schemas
- ✅ Handling large OpenAPI specifications (11MB+ JSON)
- ✅ Request/response/component schema generation
- ✅ Easy integration into existing projects
- ✅ Active development and community support

### Key Trade-offs

**Speed vs Features:**
- Skmtc is fastest (2.4s) with flexible single/multi-file modes
- Orval is second fastest (5.0s) with more flexibility options
- Kubb is third fastest (8.7s) with plugin-based architecture
- openapi-ts is slowest (11.8s) but offers SDK/client generation

**Size vs Organization:**
- Skmtc has smallest output (1.2MB single file) - best for bundle size
- openapi-ts has second smallest (2.6MB single file)
- Kubb has moderate output (3.4MB single file, 3.6MB total)
- Orval has larger output (4.5MB single file)

**File Organization:**
- Single-file: Skmtc (1.2MB), openapi-ts (2.6MB), Kubb (3.4MB), Orval (4.5MB)
- Multi-file: Skmtc (870 files, 4.4MB), Kubb (2014 files, 9.5MB) - better tree-shaking
- Both Skmtc and Kubb support both modes with configuration

**Speed Comparison:**
- Skmtc: 2.4s (baseline - fastest)
- Orval: 5.0s (2.08x slower than Skmtc)
- Kubb: 8.7s (3.63x slower than Skmtc)
- openapi-ts: 11.8s (4.92x slower than Skmtc)

---

**Test Date:** October 28, 2025
**Test Environment:** macOS, Node.js v22.16.0, Deno (latest), pnpm v10.15.1

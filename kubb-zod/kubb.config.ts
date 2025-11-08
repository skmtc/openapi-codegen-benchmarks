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
    // Required: Parse OpenAPI schema
    pluginOas({
      output: false, // Disable JSON schema output
    }),

    // Zod plugin configuration (single file output)
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

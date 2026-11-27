import { defineConfig } from 'kubb/config'
import { pluginZod } from '@kubb/plugin-zod'

export default defineConfig({
  root: '.',
  input: './schemas/github-openapi.json',
  output: {
    path: './src/gen',
  },
  plugins: [
    // Zod schemas only, written to one file. Kubb 5 reads OpenAPI with its
    // built-in adapter and prints Zod 4.
    pluginZod({
      output: {
        path: 'zod.ts',
      },
    }),
  ],
})

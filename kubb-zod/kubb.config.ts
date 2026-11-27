import { defineConfig } from 'kubb/config'
import { pluginZod } from '@kubb/plugin-zod'

export default defineConfig({
  root: '.',
  input: './schemas/github-openapi.json',
  output: {
    path: './src/gen',
  },
  plugins: [
    // A Zod schema for each component schema, and nothing else: every
    // operation is left out. Kubb 5 reads OpenAPI with its built-in adapter
    // and prints Zod 4.
    pluginZod({
      exclude: [{ type: 'path', pattern: /.*/ }],
    }),
  ],
})

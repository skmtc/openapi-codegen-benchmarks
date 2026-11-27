import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  // Input: GitHub OpenAPI specification
  input: './schemas/github-openapi.json',

  // Output: Where to generate files
  output: 'src/client',

  // A Zod schema for each component schema, and nothing else
  plugins: [
    {
      name: 'zod',
      requests: false,
      responses: false,
      definitions: true,
    },
  ],
});

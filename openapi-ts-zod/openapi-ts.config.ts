import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  // Input: GitHub OpenAPI specification
  input: './schemas/github-openapi.json',

  // Output: Where to generate files
  output: 'src/client',

  // Plugins: Configure what to generate
  plugins: [
    // Only generate Zod schemas - nothing else
    {
      name: 'zod',
      // Generate schemas for requests
      requests: true,
      // Generate schemas for responses
      responses: true,
      // Generate schemas for reusable definitions
      definitions: true,
    },
  ],
});

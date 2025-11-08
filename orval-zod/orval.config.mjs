import { defineConfig } from 'orval';

export default defineConfig({
  // GitHub API configuration
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

  // Petstore API (working example for reference)
  petstore: {
    input: {
      target: 'https://petstore3.swagger.io/api/v3/openapi.json',
    },
    output: {
      client: 'zod',
      mode: 'single',
      target: './src/gen/petstore-zod.ts',
    },
  },
});

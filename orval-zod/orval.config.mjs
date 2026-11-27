import { defineConfig } from 'orval';

export default defineConfig({
  // GitHub API: a Zod schema for each component schema, and nothing else.
  github: {
    input: {
      target: './schemas/github-openapi.json',
      // No operation has this id, so no operation is read. Without
      // `includeUnreferencedSchemas`, Orval would then drop every schema too.
      filters: {
        mode: 'include',
        operationIds: ['no-operation'],
        includeUnreferencedSchemas: true,
      },
    },
    // With `schemas` set and no `target`, Orval writes only schemas.
    output: {
      schemas: {
        path: './src/gen',
        type: 'zod',
      },
    },
  },
});

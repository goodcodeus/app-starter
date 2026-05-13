import { defineConfig } from 'orval';

export default defineConfig({
  appStarter: {
    input: {
      target: './src/core/api/fixtures/posts-example.json',
    },
    output: {
      mode: 'tags-split',
      target: './src/core/api/generated',
      schemas: './src/core/api/generated/models',
      client: 'react-query',
      httpClient: 'axios',
      baseUrl: '/api',
      mock: false,
      clean: true,
      formatter: 'prettier',
    },
  },
});

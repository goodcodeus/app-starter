import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

export default defineConfig(({ command }) => ({
  plugins: [
    svgrPlugin(),
    tsconfigPaths(),
    react(),
    checker({
      typescript: true,
    }),
  ],
  server: {
    port: 3000,
    open: true,
    host: '::',
    proxy: {
      // TODO: Fill in the API URL
    },
  },
  css:
    command === 'serve'
      ? {
          modules: {
            generateScopedName: '[name]-[local]',
          },
        }
      : undefined,
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json-summary'],
      exclude: ['node_modules/'],
    },
  },
}));

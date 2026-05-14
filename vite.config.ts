import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from '@nabla/vite-plugin-eslint';
import svgrPlugin from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

export default defineConfig(({ command }) => {
  const config = {
    resolve: {
      tsconfigPaths: true
    },
    plugins: [
      svgrPlugin(),
      react(),
      eslint({
        eslintOptions: {
          overrideConfigFile: './eslint.config.js'
        },
        shouldLint: path =>
          !/virtual:/.test(path) &&
          !/node_modules/.test(path) &&
          !/\.storybook/.test(path)
      }),
      checker({
        typescript: true
      })
    ],
    server: {
      port: 3000,
      open: true,
      host: '::',
      proxy: {
        // TODO: Fill in the API URL
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        reporter: ['text', 'json-summary'],
        exclude: ['node_modules/']
      }
    }
  };

  // Make CSS module names less annoying in dev mode
  if (command === 'serve') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    config.css = {
      modules: {
        generateScopedName: '[name]-[local]'
      }
    };
  }

  return config;
});

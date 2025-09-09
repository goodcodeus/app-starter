import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      svgrPlugin(),
      tsconfigPaths(),
      react(),
      eslint({
        overrideConfigFile: './.eslintrc.cjs',
        // eslint-disable-next-line
        // @ts-ignore
        exclude: [/virtual:/, /node_modules/, /.storybook/],
        failOnError: false,
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

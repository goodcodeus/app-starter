import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());

  const config = {
    plugins: [
      svgrPlugin(),
      tsconfigPaths(),
      react(),
      eslint(),
      checker({
        typescript: true
      })
    ],
    define: {
      // AWS Amplify throws error about global undefined
      // Reference: https://github.com/vitejs/vite/discussions/5912#discussioncomment-2908994
      global: {}
    },
    server: {
      port: 3000,
      open: true,
      host: '::',
      proxy: {
        '/api': {

        }
      }
    },
    test: {
      globals: true,
      environment: 'jsdom'
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

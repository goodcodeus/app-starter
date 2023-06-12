import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.story.tsx'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    // 'storybook-dark-mode'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  async viteFinal(config, options) {
    return mergeConfig(config, {
      server: {
        watch: {
          ignored: ['.env.*']
        }
      }
    });
  },
};

export default config;

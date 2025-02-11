import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.story.tsx'
  ],
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    '@storybook/addon-interactions'
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

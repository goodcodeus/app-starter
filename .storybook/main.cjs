const { mergeConfig } = require('vite');
const svgr = require('vite-plugin-svgr');
const path = require('path');
const { default: tsconfigPaths } = require('vite-tsconfig-paths');

module.exports = {
  stories: ['../src/**/*.story.mdx', '../src/**/*.story.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs/preset', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript'
  },
  viteFinal: config =>
    mergeConfig(config, {
      plugins: [svgr(), tsconfigPaths()],
      css: {
        modules: {
          generateScopedName: '[name]-[local]'
        }
      }
    })
};

import { DocsContainer } from '@storybook/addon-docs';
import { BrowserRouter } from 'react-router-dom';
import { DesignTokensProvider } from 'reablocks';

import { storybookTheme } from './theme';
import { theme } from '../src/shared/utils/DesignTokens';

import '../src/index.css';

export const decorators = [
  Story => (
    <BrowserRouter>
      <DesignTokensProvider value={theme}>
        <Story />
      </DesignTokensProvider>
    </BrowserRouter>
  )
];

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: storybookTheme,
    container: ({ context, children }) => (
      <DocsContainer context={context}>
        <DesignTokensProvider value={theme}>{children}</DesignTokensProvider>
      </DocsContainer>
    )
  },
  controls: {
    hideNoControlsWarning: true
  }
};

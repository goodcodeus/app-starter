import { Preview } from '@storybook/react';
import { DocsContainer } from '@storybook/addon-docs';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'reablocks';

import { storybookTheme } from './theme';
import { theme } from '../src/shared/utils/Theme';

import '../src/index.css';

const preview: Preview = {
  decorators: [
    Story => (
      <BrowserRouter>
        <ThemeProvider value={theme}>
          <Story />
        </ThemeProvider>
      </BrowserRouter>
    )
  ],
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
    actions: { argTypesRegex: '^on.*' },
    docs: {
      theme: storybookTheme,
      container: ({ context, children }) => (
        <DocsContainer context={context}>
          <ThemeProvider value={theme}>
            {children}
          </ThemeProvider>
        </DocsContainer>
      )
    }
  }
};

export default preview;

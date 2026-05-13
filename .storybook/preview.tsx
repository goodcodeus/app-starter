import React from 'react';
import { Preview } from '@storybook/react-vite';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'reablocks';
import { withThemeByClassName } from '@storybook/addon-themes';

import { storybookTheme } from './theme';
import { theme } from '../src/shared/utils/Theme';

import '../src/assets/styles/index.css';


const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'theme-light',
        dark: 'theme-dark',
      },
      defaultTheme: 'dark',
    }),
    Story => (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
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
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </DocsContainer>
      ),

      codePanel: true
    }
  }
};

export default preview;

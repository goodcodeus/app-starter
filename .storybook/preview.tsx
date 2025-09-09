import { Preview } from '@storybook/react';
import { DocsContainer } from '@storybook/blocks';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'reablocks';

import { storybookTheme } from './theme';
import { theme } from '../src/shared/utils/Theme';

import '../src/index.css';

const preview: Preview = {
  decorators: [
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
      )
    }
  }
};

export default preview;

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'reablocks';

import { theme } from 'shared/utils/Theme';
import { ErrorBoundary } from 'shared/utils/ErrorBoundary';
import { Auth } from 'core/Auth';
import { App } from './App';

import './assets/styles/index.css';
import { QueryProvider } from './core/api/QueryProvider';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <Auth>
              <App />
            </Auth>
          </ErrorBoundary>
        </ThemeProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);

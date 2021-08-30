import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import Router from './routes';
import theme from './theme';
import AppProvider from './providers';
import { UploadProvider } from './providers/UploadProvider';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <AppProvider>
            <UploadProvider>
              <Router />
              <GlobalStyle />
            </UploadProvider>
          </AppProvider>
        </ThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  );
}

export default App;

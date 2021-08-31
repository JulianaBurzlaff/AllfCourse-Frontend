import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import Router from './routes';
import theme from './theme';
import AppProvider from './providers';
import { UploadProvider } from './providers/UploadProvider';
import { CourseProvider } from './providers/CourseProvider';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <AppProvider>
              <UploadProvider>
                <CourseProvider>
                  <Router />
                  <GlobalStyle />
                </CourseProvider>
              </UploadProvider>
            </AppProvider>
          </ThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </SnackbarProvider>
  );
}

export default App;

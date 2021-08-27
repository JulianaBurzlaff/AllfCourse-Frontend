import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import Router from './routes';
import theme from './theme';
import AppProvider from './providers';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <MaterialThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Router />
          <GlobalStyle />
        </AppProvider>
      </ThemeProvider>
    </MaterialThemeProvider>
  );
}

export default App;

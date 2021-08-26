import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import Router from './routes';
import theme from './theme';
import AppProvider from './providers';

function App() {
  return (
    <MaterialThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Router />
        </AppProvider>
      </ThemeProvider>
    </MaterialThemeProvider>
  );
}

export default App;

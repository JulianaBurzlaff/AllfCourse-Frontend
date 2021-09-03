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
import { StudentProvider } from './providers/StudentProvider';
import { TeacherProvider } from './providers/TeacherProvider';
import { UserProvider } from './providers/UserProvider';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <AppProvider>
              <UserProvider>
                <UploadProvider>
                  <TeacherProvider>
                    <CourseProvider>
                      <StudentProvider>
                        <Router />
                        <GlobalStyle />
                      </StudentProvider>
                    </CourseProvider>
                  </TeacherProvider>
                </UploadProvider>
              </UserProvider>
            </AppProvider>
          </ThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </SnackbarProvider>
  );
}

export default App;

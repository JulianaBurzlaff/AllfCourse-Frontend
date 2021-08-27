import { createTheme } from '@material-ui/core/styles';

// https://material-ui.com/pt/customization/default-theme/
export default createTheme({
  palette: {
    primary: {
      main: '#176D76',
      dark: '#0F464B',
      contrastText: '#F8F9FA',
    },
    secondary: {
      main: '#69726F',
    },
    error: {
      main: '#C65B58',
    },
    success: {
      main: '#49A7A1',
    },
    warning: {
      main: '#EFB66D',
    },
    text: {
      primary: '#343a40',
      secondary: '#F8F9FA',
    },
  },
});

// gray: '#888',
// nav: '#D5D8B5',

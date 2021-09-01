import { createTheme } from '@material-ui/core/styles';

// https://material-ui.com/pt/customization/default-theme/
export default createTheme({
  palette: {
    primary: {
      main: '#176D76',
      dark: '#0F464B',
      light: '#B8D9D7',
      contrastText: '#F8F9FA',
    },
    secondary: {
      main: '#69726F',
      dark: '#343A40',
    },
    error: {
      main: '#C65B58',
      dark: '#A50303',
    },
    success: {
      main: '#49A7A1',
    },
    warning: {
      main: '#EFB66D',
      dark: '#A55E03',
    },
    text: {
      primary: '#343a40',
      secondary: '#F8F9FA',
    },
    info: {
      main: '#D5D8B5',
      dark: '#A55E03',
    },
  },
});

// gray: '#888',
// nav: '#D5D8B5',

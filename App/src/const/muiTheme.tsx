import { createTheme } from '@mui/material';

const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0066ff',
    },
    background: {
      grayBg: '#efefef',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: {
      fontWeight: 600,
      fontSize: '3rem',
    },
    body1: {},
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 20,
  },

  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 2,
      },
    },
  },
});

export { muiTheme };

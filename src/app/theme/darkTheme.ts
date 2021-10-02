import { createTheme, Theme } from '@mui/material/styles';
import { blue, pink } from '@mui/material/colors';

// define dark theme colors
export const darkTheme: Theme = createTheme({
  palette: {
    primary: {
      main: pink[300]
    },
    secondary: {
      main: blue[800]
    }
  }
});

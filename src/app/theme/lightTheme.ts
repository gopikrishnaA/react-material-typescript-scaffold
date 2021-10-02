import { createTheme, Theme } from '@mui/material/styles';
import { blue, pink } from '@mui/material/colors';

export const lightTheme: Theme = createTheme({
  palette: {
    primary: {
      main: blue[800]
    },
    secondary: {
      main: pink[300]
    }
  }
});

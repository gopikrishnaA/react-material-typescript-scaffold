import { ApolloProvider } from '@apollo/client';
import {
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  Theme,
  ThemeProvider
} from '@mui/material/styles';
import { ReactElement, useReducer } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ApplicationProvider } from './AppProvider';
import Router from './routes/Router';
import dataStore from './services/data-store';
import { darkTheme, lightTheme } from './theme';

function App(): ReactElement {
  const [useDefaultTheme, toggle] = useReducer(theme => !theme, true);

  let theme: Theme = createTheme(useDefaultTheme ? lightTheme : darkTheme);
  theme = responsiveFontSizes(theme);

  return (
    <>
      <ApolloProvider client={dataStore}>
        <ApplicationProvider>
          <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
              <HelmetProvider context={{}}>
                <Router useDefaultTheme={useDefaultTheme} toggle={toggle} />
              </HelmetProvider>
            </StyledEngineProvider>
          </ThemeProvider>
        </ApplicationProvider>
      </ApolloProvider>
    </>
  );
}

export default App;

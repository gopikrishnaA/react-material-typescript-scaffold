import { ReactElement } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { routeProps } from './types';

function PrivateRoute({
  children,
  isAuthenticated,
  path,
  ...rest
}: routeProps): ReactElement {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect exact from={location.pathname} to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;

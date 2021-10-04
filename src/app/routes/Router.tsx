import { ReactElement, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoute from './PublicRoute';
import { useApplication } from '../AppProvider';

interface Props {
  toggle: any;
  useDefaultTheme: any;
}

const NoFoundComponent = (): ReactElement => <div>Not Found</div>;

const Router = ({ toggle, useDefaultTheme }: Props): ReactElement => {
  const { isAuthenticated } = useApplication();
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
            <Login />
          </PublicRoute>
          <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
            <ProtectedRoutes
              toggle={toggle}
              useDefaultTheme={useDefaultTheme}
            />
          </PrivateRoute>
          <Route path="*">
            <NoFoundComponent />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;

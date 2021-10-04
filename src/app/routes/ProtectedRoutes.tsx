import { ReactElement } from 'react';
import { Route } from 'react-router-dom';
// Layout
import Layout from '../components/Layout';
// interfaces
import RouteItem from '../model/RouteItem.model';
// app routes
import { headerMenu, settingsMenu, footerMenu } from './menu';
import { getUniqueListBy } from '../utils/utils';
interface Props {
  toggle: any;
  useDefaultTheme: any;
}
const DefaultComponent = (): ReactElement => <div>No Component Defined.</div>;
const routes = getUniqueListBy(
  [...headerMenu, ...settingsMenu, ...footerMenu],
  'key'
);

const ProtectedRoutes = ({ toggle, useDefaultTheme }: Props): ReactElement => (
  <Layout toggleTheme={toggle} useDefaultTheme={useDefaultTheme}>
    {routes.map((route: RouteItem) =>
      route.subRoutes ? (
        route.subRoutes.map((item: RouteItem) => (
          <Route
            key={`${item.key}`}
            path={`${item.path}`}
            component={item.component || DefaultComponent}
            exact
          />
        ))
      ) : (
        <Route
          key={`${route.key}`}
          path={`${route.path}`}
          component={route.component || DefaultComponent}
          exact
        />
      )
    )}
  </Layout>
);

export default ProtectedRoutes;

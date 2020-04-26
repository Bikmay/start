import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import OrdersPage from './containers/OrdersPage';
import SidebarPage from './containers/SidebarPage';
import ClientsPage from './containers/ClientsPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.ORDERS} component={OrdersPage} />
      <Route path={routes.CLIENTS} component={ClientsPage} />
    </Switch>
  </App>
);

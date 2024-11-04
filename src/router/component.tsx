import React from 'react';
import { Router, Switch } from 'react-router-dom';

import * as Views from '../views';

import history from './history';
import * as routes from './routes';

import ProtectedRoute from '../modules/ProtectedRoute/components/Route';

const RouterComponent = (): React.ReactElement => (
  <Router history={history}>
    <Switch>
      <ProtectedRoute exact path={routes.register}>
        <Views.Register />
      </ProtectedRoute>
      <ProtectedRoute exact path={routes.signin}>
        <Views.SignIn />
      </ProtectedRoute>
      <ProtectedRoute forLogged path={routes.userDetails}>
        <Views.UserDetails />
      </ProtectedRoute>
    </Switch>
  </Router>
);

export default RouterComponent;

/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// types
import { IState } from '../../../../store/types';
import { IProps } from './types';

// components
import Loader from '../../../_shared/components/Loader';

// routes
import * as routes from '../../../../router/routes';

// actions
import { getDetails as getDetailsAction } from '../../../UserDetails/actions';

const ProtectedRouteComponent = (props: IProps): React.ReactElement => {
  const { path, exact = false, forLogged = false, location } = props;

  const children = props.children as React.ComponentProps<
    typeof Route
  >['children'];
  const fallback = (props.fallback ?? (
    <Redirect
      to={{
        pathname: routes.signin,
        state: { from: location },
      }}
    />
  )) as React.ComponentProps<typeof Route>['children'];

  const { logged } = useSelector((state: IState) => state.protectedRoute);

  const dispatch = useDispatch();

  useEffect(() => {
    if (logged === null) {
      dispatch(getDetailsAction());
    }
  }, []);

  if (logged === null)
    return (
      <Route exact path={path}>
        <Loader fullScreen />
      </Route>
    );
  if (forLogged)
    return (
      <Route exact path={path}>
        {logged ? children : fallback}
      </Route>
    );

  return (
    <Route exact={exact} path={path}>
      {logged && !(path === routes.signin) ? fallback : children}
    </Route>
  );
};

export default ProtectedRouteComponent;

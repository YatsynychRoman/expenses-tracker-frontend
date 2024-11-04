import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'store/types';

import Form from 'modules/SignIn/components/Form/component';
import { setLoadingFalse } from '../../modules/_shared/actions';

import history from '../../router/history';
import * as routes from '../../router/routes';

const SignInViewComponent = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { logged } = useSelector((state: IState) => state.protectedRoute);

  useEffect(() => {
    if (logged) {
      history.push(routes.userDetails);
    }
  }, [logged]);

  useEffect(() => {
    dispatch(setLoadingFalse());
  }, []);

  return <Form />;
};

export default SignInViewComponent;

import { call, put, takeLatest, Effect } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';
import { setLogged } from 'modules/ProtectedRoute/actions';

import { REGISTER } from '../actions/keys';
import { IRegisterAction } from '../actions/types';

import {
  setLoadingTrue,
  setLoadingFalse,
  setServerError,
  clearServerError,
} from '../../_shared/actions';

import { register as registerRequest } from '../../../api';
import {
  IResponseData,
  IErrorResponse,
  ISuccessResponse,
} from '../../../api/auth/register/types';

import { errorMessages, formValidationMessages } from '../../../utils/consts';
import { setRegisterStep } from '../actions';

import history from '../../../router/history';
import * as routes from '../../../router/routes';

function* register({ payload }: IRegisterAction): IterableIterator<Effect> {
  yield put(setLoadingTrue());
  yield put(clearServerError());
  try {
    const response = ((yield call(
      registerRequest,
      payload
    )) as unknown) as AxiosResponse<IResponseData>;
    if (response.status === 200) {
      const { accessToken, refreshToken } = response.data as ISuccessResponse;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      yield put(setLogged(true));
      yield put(setLoadingFalse());
      history.push(routes.userDetails);
    } else if (response.status === 409) {
      const errorMessage = (response.data as IErrorResponse).message;

      if (errorMessage.includes('username')) {
        yield put(setServerError(formValidationMessages.register.username));
        yield put(setLoadingFalse());
        yield put(setRegisterStep(0));
      } else if (errorMessage.includes('email')) {
        yield put(setServerError(formValidationMessages.register.email));
        yield put(setLoadingFalse());
        yield put(setRegisterStep(1));
      }
    } else if (response.status === 400) {
      // Validation error
      yield put(setServerError(formValidationMessages.register.default));
      yield put(setLoadingFalse());
      yield put(setRegisterStep(0));
    } else {
      yield put(setServerError(errorMessages.default));
      yield put(setLoadingFalse());
    }
  } catch (error) {
    console.error(error);
    yield put(setServerError(errorMessages.default));
    yield put(setLoadingFalse());
  }
}

export default takeLatest(REGISTER, register);

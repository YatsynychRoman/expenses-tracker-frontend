import { put, Effect, takeLatest, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { setLogged } from 'modules/ProtectedRoute/actions';
import {
  clearServerError,
  setLoadingFalse,
  setServerError,
  setLoadingTrue,
} from 'modules/_shared/actions';

import { IResponseData } from 'api/auth/signIn/types';
import { ILoginAction } from '../actions/types';

import { LOGIN } from '../actions/keys';

import { signIn } from '../../../api';

function* login({ payload }: ILoginAction): IterableIterator<Effect> {
  yield put(setLoadingTrue());
  yield put(clearServerError());
  try {
    const response = ((yield call(
      signIn,
      payload
    )) as unknown) as AxiosResponse<IResponseData>;

    if (response.status === 200) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);

      yield put(setLogged(true));
      yield put(setLoadingFalse());
    }
  } catch (error) {
    yield put(setServerError(error.message));
    yield put(setLoadingFalse());
  }
}

export default takeLatest(LOGIN, login);

import { put, Effect, takeLatest } from 'redux-saga/effects';

import { setLogged } from 'modules/ProtectedRoute/actions';
import { clearServerError } from 'modules/_shared/actions';
import { clearDetails } from 'modules/UserDetails/actions';

import { LOGOUT } from '../actions/keys';

function* logout(): IterableIterator<Effect> {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');

  yield put(setLogged(false));
  yield put(clearServerError());
  yield put(clearDetails());
}

export default takeLatest(LOGOUT, logout);

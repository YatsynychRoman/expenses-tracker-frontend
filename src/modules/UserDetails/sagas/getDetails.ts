import { takeLatest, call, Effect, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { getData as getDataRequest } from 'api';

import { setLogged } from 'modules/ProtectedRoute/actions';

import { IResponseData } from 'api/user/getData/types';

import { GET_DETAILS } from '../actions/keys';
import { clearDetails, setDetails } from '../actions';

function* getDetails(): IterableIterator<Effect> {
  try {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      yield put(setLogged(false));
      return;
    }

    const response = ((yield call(
      getDataRequest,
      accessToken
    )) as unknown) as AxiosResponse<IResponseData>;

    if (response.status === 200) {
      yield put(setLogged(true));
      yield put(setDetails(response.data));
    }
  } catch (error) {
    yield put(setLogged(false));
    yield put(clearDetails());
  }
}

export default takeLatest(GET_DETAILS, getDetails);

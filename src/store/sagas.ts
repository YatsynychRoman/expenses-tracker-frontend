/* eslint-disable func-names */
import { all, Effect } from 'redux-saga/effects';

import register from '../modules/Register/sagas';
import signIn from '../modules/SignIn/sagas';
import userDetails from '../modules/UserDetails/sagas';

export default function* (): IterableIterator<Effect> {
  yield all([...register, ...userDetails, ...signIn]);
}

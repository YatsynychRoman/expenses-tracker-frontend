import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import shared from '../modules/_shared/reducer';
import register from '../modules/Register/reducer';
import protectedRoute from '../modules/ProtectedRoute/reducer';
import userDetails from '../modules/UserDetails/reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  shared,
  register,
  userDetails,
  protectedRoute,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

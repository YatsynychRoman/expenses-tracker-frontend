import * as actionKeys from './keys';
import * as I from './types';

export const setLoadingTrue = (): I.ISetLoadingTrueAction => ({
  type: actionKeys.SET_LOADING_TRUE,
});

export const setLoadingFalse = (): I.ISetLoadingFalseAction => ({
  type: actionKeys.SET_LOADING_FALSE,
});

export const setServerError = (payload: string): I.ISetServerErrorAction => ({
  type: actionKeys.SET_SERVER_ERROR,
  payload,
});

export const clearServerError = (): I.IClearServerErrorAction => ({
  type: actionKeys.CLEAR_SERVER_ERROR,
});

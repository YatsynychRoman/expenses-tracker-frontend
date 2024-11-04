import * as actionKeys from './keys';
import * as I from './types';

export const setLogged = (payload: boolean): I.ISetLoggedAction => ({
  type: actionKeys.SET_LOGGED,
  payload,
});

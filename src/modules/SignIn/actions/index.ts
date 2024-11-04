import * as actionKeys from './keys';
import * as I from './types';

export const login = (payload: I.ILoginPayload): I.ILoginAction => ({
  type: actionKeys.LOGIN,
  payload,
});

export const logout = (): I.ILogoutAction => ({
  type: actionKeys.LOGOUT,
});

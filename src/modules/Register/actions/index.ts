import * as actionKeys from './keys';
import * as I from './types';
import { IUserData } from '../reducer/types';
import { IRequestData } from '../../../api/auth/register/types';

export const updateUserData = (
  payload: IUserData
): I.IUpdateUserDataAction => ({
  type: actionKeys.UPDATE_USER_DATA,
  payload,
});

export const resetUserData = (): I.IResetUserDataAction => ({
  type: actionKeys.RESET_USER_DATA,
});

export const setRegisterStep = (payload: number): I.ISetRegisterStepAction => ({
  type: actionKeys.SET_REGISTER_STEP,
  payload,
});

export const register = (payload: IRequestData): I.IRegisterAction => ({
  type: actionKeys.REGISTER,
  payload,
});

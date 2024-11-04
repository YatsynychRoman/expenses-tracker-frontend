import { TReduxAction } from '../../../store/types';
import * as actionKeys from './keys';
import { IUserData } from '../reducer/types';
import { IRequestData } from '../../../api/auth/register/types';

// action interfaces
export interface IUpdateUserDataAction extends TReduxAction {
  type: typeof actionKeys.UPDATE_USER_DATA;
  payload: IUserData;
}
export interface IResetUserDataAction extends TReduxAction {
  type: typeof actionKeys.RESET_USER_DATA;
}
export interface ISetRegisterStepAction extends TReduxAction {
  type: typeof actionKeys.SET_REGISTER_STEP;
  payload: number;
}
export interface IRegisterAction extends TReduxAction {
  type: typeof actionKeys.REGISTER;
  payload: IRequestData;
}

export type TAction =
  | IUpdateUserDataAction
  | IResetUserDataAction
  | ISetRegisterStepAction
  | IRegisterAction;

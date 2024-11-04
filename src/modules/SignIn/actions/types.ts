import { TReduxAction } from '../../../store/types';
import * as actionKeys from './keys';

// payload interfaces
export interface ILoginPayload {
  login: string;
  password: string;
}

// action interfaces
export interface ILoginAction extends TReduxAction {
  type: typeof actionKeys.LOGIN;
  payload: ILoginPayload;
}

export interface ILogoutAction extends TReduxAction {
  type: typeof actionKeys.LOGOUT;
}

export type TAction = ILoginAction | ILogoutAction;

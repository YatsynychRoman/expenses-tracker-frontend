import { TReduxAction } from '../../../store/types';
import * as actionKeys from './keys';
import { IResponseData as IUserData } from '../../../api/user/getData/types';

// action interfaces
export interface IGetDetailsAction extends TReduxAction {
  type: typeof actionKeys.GET_DETAILS;
}

export interface ISetDetailsAction extends TReduxAction {
  type: typeof actionKeys.SET_DETAILS;
  payload: IUserData;
}

export interface IClearDetailsAction extends TReduxAction {
  type: typeof actionKeys.CLEAR_DETAILS;
}

export type TAction =
  | IGetDetailsAction
  | ISetDetailsAction
  | IClearDetailsAction;

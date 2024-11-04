import { TReduxAction } from '../../../store/types';
import * as actionKeys from './keys';

// action interfaces
export interface ISetLoadingTrueAction extends TReduxAction {
  type: typeof actionKeys.SET_LOADING_TRUE;
}

export interface ISetLoadingFalseAction extends TReduxAction {
  type: typeof actionKeys.SET_LOADING_FALSE;
}

export interface ISetServerErrorAction extends TReduxAction {
  type: typeof actionKeys.SET_SERVER_ERROR;
  payload: string;
}

export interface IClearServerErrorAction extends TReduxAction {
  type: typeof actionKeys.CLEAR_SERVER_ERROR;
}

export type TAction =
  | ISetLoadingTrueAction
  | ISetLoadingFalseAction
  | ISetServerErrorAction
  | IClearServerErrorAction;

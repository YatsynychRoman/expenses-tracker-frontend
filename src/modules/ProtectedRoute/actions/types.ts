import { TReduxAction } from '../../../store/types';
import * as actionKeys from './keys';

// action interfaces
export interface ISetLoggedAction extends TReduxAction {
  type: typeof actionKeys.SET_LOGGED;
  payload: boolean;
}

export type TAction = ISetLoggedAction;

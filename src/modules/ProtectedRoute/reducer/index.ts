import { IState } from './types';
import { TAction } from '../actions/types';
import * as actionKeys from '../actions/keys';
import initialState from './initialState';

export default (state: IState = initialState, action: TAction): IState => {
  switch (action.type) {
    case actionKeys.SET_LOGGED:
      return {
        logged: action.payload,
      };
    default:
      return state;
  }
};

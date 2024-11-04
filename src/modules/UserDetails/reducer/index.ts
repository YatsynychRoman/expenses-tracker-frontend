import { IState } from './types';
import { TAction } from '../actions/types';
import * as actionKeys from '../actions/keys';
import initialState from './initialState';

export default (state: IState = initialState, action: TAction): IState => {
  switch (action.type) {
    case actionKeys.SET_DETAILS:
      return {
        ...state,
        data: action.payload,
      };
    case actionKeys.CLEAR_DETAILS:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};

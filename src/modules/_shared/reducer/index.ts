import { IState } from './types';
import { TAction } from '../actions/types';
import * as actionKeys from '../actions/keys';
import initialState from './initialState';

export default (state: IState = initialState, action: TAction): IState => {
  switch (action.type) {
    case actionKeys.SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case actionKeys.SET_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case actionKeys.SET_SERVER_ERROR:
      return {
        ...state,
        serverError: action.payload,
      };
    case actionKeys.CLEAR_SERVER_ERROR:
      return {
        ...state,
        serverError: null,
      };
    default:
      return state;
  }
};

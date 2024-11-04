import { IState } from './types';
import { TAction } from '../actions/types';
import * as actionKeys from '../actions/keys';
import initialState from './initialState';

export default (state: IState = initialState, action: TAction): IState => {
  switch (action.type) {
    case actionKeys.UPDATE_USER_DATA:
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload,
        },
      };
    case actionKeys.RESET_USER_DATA:
      return {
        ...initialState,
      };
    case actionKeys.SET_REGISTER_STEP:
      return {
        ...state,
        registerStep: action.payload,
      };
    default:
      return state;
  }
};

import { Action as ReduxAction, Store as ReduxStore } from 'redux';

// types
import { IState as ISharedState } from '../modules/_shared/reducer/types';
import { IState as IRegisterState } from '../modules/Register/reducer/types';
import { IState as IProtectedRouteState } from '../modules/ProtectedRoute/reducer/types';
import { IState as IUserDetailsState } from '../modules/UserDetails/reducer/types';

export type TReduxAction = ReduxAction<string>;
export type TReduxStore = ReduxStore<IState, TReduxAction>;

export interface IState {
  shared: ISharedState;
  register: IRegisterState;
  protectedRoute: IProtectedRouteState;
  userDetails: IUserDetailsState;
}

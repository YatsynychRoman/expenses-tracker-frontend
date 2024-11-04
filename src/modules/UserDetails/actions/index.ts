import * as actionKeys from './keys';
import * as I from './types';
import { IResponseData as IUserData } from '../../../api/user/getData/types';

export const getDetails = (): I.IGetDetailsAction => ({
  type: actionKeys.GET_DETAILS,
});

export const setDetails = (payload: IUserData): I.ISetDetailsAction => ({
  type: actionKeys.SET_DETAILS,
  payload,
});

export const clearDetails = (): I.IClearDetailsAction => ({
  type: actionKeys.CLEAR_DETAILS,
});

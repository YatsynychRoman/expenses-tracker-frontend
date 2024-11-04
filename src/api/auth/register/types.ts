export interface IRequestData {
  email: string;
  username: string;
  password: string;
  name: string;
  surname: string;
  currency: string;
}

export interface ISuccessResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IErrorResponse {
  message: string;
}

export type IResponseData = ISuccessResponse | IErrorResponse;

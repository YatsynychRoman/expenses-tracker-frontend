export interface IState {
  loading: boolean;
  serverError: string | number | null;
}

export interface IUserData {
  username: string;
  email: string;
  password: string;
}

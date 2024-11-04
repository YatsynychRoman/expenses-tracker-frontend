export interface IUserData {
  email?: string;
  name?: string;
  surname?: string;
  currency?: string;
  username?: string;
  password?: string;
}

export interface IState {
  userData: IUserData;
  registerStep: number;
}

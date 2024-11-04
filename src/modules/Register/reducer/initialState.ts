import { IState } from './types';

const initialState: IState = {
  userData: {
    username: undefined,
    email: undefined,
    password: undefined,
  },
  registerStep: 0,
};

export default initialState;

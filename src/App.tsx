import React from 'react';
import { Provider } from 'react-redux';

import Router from './router';

import { store } from './store';

import GlobalStyles from './GlobalStyles';

export default (): React.ReactElement => (
  <>
    <GlobalStyles />
    <Provider store={store}>
      <Router />
    </Provider>
  </>
);

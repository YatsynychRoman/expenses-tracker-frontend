import React from 'react';

import { IProps } from './types';

const Content = ({
  email,
  username,
  name,
  surname,
  currency,
}: IProps): React.ReactElement => (
  <div>
    <h3>{name}</h3>
    <h3>{surname}</h3>
    <h3>{email}</h3>
    <h3>{username}</h3>
    <h3>{currency}</h3>
  </div>
);

export default Content;

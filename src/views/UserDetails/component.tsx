import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'store/types';

import Loader from 'modules/_shared/components/Loader';
import Content from 'modules/UserDetails/components/Content';
import { getDetails } from 'modules/UserDetails/actions';

const UserDetails = (): React.ReactElement => {
  const { data } = useSelector((state: IState) => state.userDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(getDetails());
    }
  }, [data]);

  if (!data) {
    return <Loader fullScreen />;
  }

  return (
    <Content
      email={data.email}
      username={data.username}
      name={data.name}
      surname={data.surname}
      currency={data.currency}
    />
  );
};

export default UserDetails;

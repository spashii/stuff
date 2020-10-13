import { navigate } from '@reach/router';
import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth';

const Route: React.FC = (props: any) => {
  const { currentUser } = useContext(AuthContext);
  const { children } = props;

  if (!!currentUser) return <>{children}</>;
  else {
    navigate('/login');
  }
  return <></>;
};

export default Route;

import React, { useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import UserContext from '../context/User';

const Home = (_props: RouteComponentProps) => {
  const { user } = useContext<any>(UserContext);

  return <div>{user && JSON.stringify(user)}</div>;
};

export default Home;

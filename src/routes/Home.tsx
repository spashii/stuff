import React, { useContext, useEffect } from 'react';
import { navigate, RouteComponentProps } from '@reach/router';

import { Layout } from '../components';

import { AuthContext } from '../context/Auth';

const Home = (_props: RouteComponentProps) => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser]);

  return (
    <>
      <Layout>
        <div>Home</div>
      </Layout>
    </>
  );
};

export default Home;

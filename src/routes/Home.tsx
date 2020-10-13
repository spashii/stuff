import React, { useContext, useEffect } from 'react';
import { navigate, RouteComponentProps } from '@reach/router';

import { Layout, PrivateRoute, Test } from '../components';

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
      <PrivateRoute>
        <Layout>
          {currentUser && (
            <img
              src={currentUser.photoURL}
              alt={`${currentUser.displayName}`}
            />
          )}
          <div>Home</div>
          <Test />
        </Layout>
      </PrivateRoute>
    </>
  );
};

export default Home;

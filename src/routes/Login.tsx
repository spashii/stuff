import React, { useContext, useEffect } from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import { Button } from '@material-ui/core';

import firebase from '../Firebase';
import { Layout } from '../components';
import { AuthContext } from '../context/Auth';

const Login = (_props: RouteComponentProps) => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!!currentUser) {
      navigate('/');
    }
  }, [currentUser]);

  function handleLogin(e: MouseEvent) {
    e.preventDefault();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function () {
        var provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithRedirect(provider);
      })
      .catch(function (error) {
        console.error(error);
        return null;
      });
  }

  return (
    <>
      <Layout>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={(event: any) => handleLogin(event)}
          >
            Login with Google
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default Login;

import React, { useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Button } from '@material-ui/core';

import firebase from '../external/Firebase';
import UserContext from '../context/User';

const Login = (_props: RouteComponentProps) => {
  const { user, setUser } = useContext<any>(UserContext);

  function signInWithGoogle(e: MouseEvent) {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result: any) {
        setUser(result);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }

  return (
    <div>
      {!user ? (
        <Button
          variant='contained'
          color='primary'
          onClick={(event: any) => signInWithGoogle(event)}
        >
          login with google
        </Button>
      ) : (
        JSON.stringify(user)
      )}
    </div>
  );
};

export default Login;

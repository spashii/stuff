import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Button } from '@material-ui/core';

import firebase from '../external/Firebase';

const Login = (_props: RouteComponentProps) => {
  const [state, setState] = useState<any>(null);

  function signInWithGoogle(e: MouseEvent) {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // var token = result.credential.accessToken;
        // var user = result.user;
        setState(result);
      })
      .catch(function (error) {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // var email = error.email;
        // var credential = error.credential;
        setState(error);
      });
  }

  return (
    <div>
      <Button
        variant='contained'
        color='primary'
        onClick={(event: any) => signInWithGoogle(event)}
      >
        login with google
      </Button>
      <div>{state && JSON.stringify(state)}</div>
    </div>
  );
};

export default Login;

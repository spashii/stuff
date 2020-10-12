import React, { useState, useEffect, createContext } from 'react';

import { User } from 'firebase';
import firebase from '../Firebase';

export const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pending, setPending] = useState<boolean>(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: User | null) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, [setCurrentUser]);

  if (pending) {
    return <></>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

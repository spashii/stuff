import React, { useContext } from 'react';
import { Link } from '@reach/router';

import { AuthContext } from '../../context/Auth';
import firebase from '../../Firebase';

const Navbar: React.FC = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        {!!currentUser ? (
          <React.Fragment>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login" onClick={() => firebase.auth().signOut()}>
                Logout({currentUser.displayName})
              </Link>
            </li>
          </React.Fragment>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

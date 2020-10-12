import React, { useState } from 'react';
import {} from '@material-ui/core';
import { Router, Link } from '@reach/router';

import Home from './routes/Home';
import Login from './routes/Login';
import NotFound from './routes/NotFound';

import UserContext from './context/User';

const App = () => {
  const [user, setUser] = useState<object | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='react-app'>
        <nav>
          <Link to='/'>home</Link>
          <Link to='/login'>login</Link>
        </nav>
        <Router>
          <Home path='/' />
          <Login path='/login' />
          <NotFound default />
        </Router>
      </div>
    </UserContext.Provider>
  );
};

export default App;

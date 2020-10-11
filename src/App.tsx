import React from 'react';
import {} from '@material-ui/core';
import { Router, Link } from '@reach/router';
import Home from './routes/Home';
import Login from './routes/Login';
import NotFound from './routes/NotFound';

const App = () => {
  return (
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
  );
};

export default App;

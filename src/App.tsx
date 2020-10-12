import React from 'react';
import {} from '@material-ui/core';
import { Router } from '@reach/router';

import Home from './routes/Home';
import Login from './routes/Login';
import NotFound from './routes/NotFound';

import { AuthProvider } from './context/Auth';

const App = () => {
  return (
    <div className="react-app">
      <AuthProvider>
        <Router>
          <Home path="/" />
          <Login path="/login" />
          <NotFound default />
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;

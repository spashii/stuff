import React from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import { Button, Paper } from '@material-ui/core';
import { Layout } from '../components';

const NotFound = (_props: RouteComponentProps) => {
  return (
    <Layout>
      <Paper
        style={{
          padding: '8px',
          margin: '8px',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            navigate('/');
          }}
        >
          click to go home
        </Button>
      </Paper>
    </Layout>
  );
};

export default NotFound;

import React, { useContext, useEffect } from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import { Container, makeStyles } from '@material-ui/core';

import { Layout, PrivateRoute } from '../components';
import { AuthContext } from '../context/Auth';
import View1 from '../components/GenericView/View1';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
}));

const Home = (_props: RouteComponentProps) => {
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser]);

  return (
    <>
      <PrivateRoute>
        <Layout>
          <Container maxWidth="lg" disableGutters className={classes.root}>
            <View1 />
          </Container>
        </Layout>
      </PrivateRoute>
    </>
  );
};

export default Home;

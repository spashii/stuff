import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core';

interface Props {
  title?: string;
}

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const Layout: React.FC<Props> = ({ title, children }) => {
  const classes = useStyles();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {title}
      <Navbar />
      <div className={classes.toolbar} />
      <div
        style={{
          flexGrow: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;

import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import {
  AppBar,
  Avatar,
  Button,
  Icon,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';

import firebase from '../../Firebase';
import { AuthContext } from '../../context/Auth';

const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(1),
  },
  title: {
    fontSize: theme.typography.pxToRem(28),
    color: 'white',
    textTransform: 'none',
  },
  button: {
    marginRight: 'auto',
  },
}));

function getInitials(fullName: string): string {
  let initials: any = fullName.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || ''))
    .toUpperCase()
    .toString();
  return initials.length > 2 ? initials.substring(0, 2) : initials;
}

const Navbar: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Icon className={classes.logo}>scatter_plot</Icon>
        <Button
          onClick={() => {
            navigate('/');
          }}
          className={classes.button}
        >
          <Typography className={classes.title}>stuff</Typography>
        </Button>
        {currentUser && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt={currentUser.displayName} src={currentUser.photoURL}>
                {getInitials(currentUser.displayName)}
              </Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate('/profile');
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  firebase.auth().signOut();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

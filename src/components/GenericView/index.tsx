import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles, Paper, Typography } from '@material-ui/core';

import Item, { GenericViewItem } from './item';

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
      paddingTop: theme.spacing(3),
    },
  },
  head: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    padding: theme.spacing(1),
    paddingTop: 0,
  },
  title: {
    fontSize: theme.typography.pxToRem(28),
    fontWeight: 'bold',
    marginRight: theme.spacing(1),
  },
  clock: {
    fontSize: theme.typography.pxToRem(20),
  },
  body: {},
}));

interface GenericView {
  title: string;
  clock: {
    f: Function;
    timeout: number;
  };
  items: Array<GenericViewItem>;
}

const View: React.FC<GenericView> = (props) => {
  const classes = useStyles();
  const { title, clock, items } = props;
  const [clockString, setClockString] = useState<string>(() => clock.f());

  const updateClock = useCallback(() => setClockString(clock.f()), [clock]);

  useEffect(() => {
    const interval = setInterval(updateClock, clock.timeout);
    return () => clearInterval(interval);
  }, [clock, updateClock]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.head}>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.clock}>{clockString}</Typography>
        </div>
        {items.length > 1 ? (
          <div className={classes.body}>
            {items.map((item) => (
              <Item item={item} />
            ))}
          </div>
        ) : (
          <Typography>there's nothing here</Typography>
        )}
      </Paper>
    </div>
  );
};

export default View;

import React from 'react';
import { ButtonBase, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: theme.typography.pxToRem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginTop: theme.spacing(2),
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
  title: {
    fontSize: theme.typography.pxToRem(32),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1),
    },
  },
  subtitle: {
    fontSize: theme.typography.pxToRem(20),
  },
  clocks: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  clock1: {
    fontSize: theme.typography.pxToRem(20),
  },
  clock2: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightLight,
  },
}));

export interface GenericViewItem {
  title: string;
  subtitle: string;
  clock1: string;
  clock2: string;
  color: string;
}

interface Props {
  item: GenericViewItem;
}

const Item: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { title, subtitle, clock1, clock2, color } = props.item;
  return (
    <ButtonBase
      className={classes.root}
      component={Paper}
      style={{
        background: `${color}`,
        padding: '16px',
        borderRadius: '4px',
      }}
    >
      <div
        style={{
          alignSelf: 'center',
        }}
      >
        <div className={classes.titles}>
          <Typography className={classes.title}>
            {title.toLowerCase()}
          </Typography>
          <Typography className={classes.subtitle}>
            {subtitle.toLowerCase()}
          </Typography>
        </div>
      </div>
      <div className={classes.clocks}>
        <Typography className={classes.clock1}>{clock1}</Typography>
        <Typography className={classes.clock2}>{clock2}</Typography>
      </div>
    </ButtonBase>
  );
};

export default Item;

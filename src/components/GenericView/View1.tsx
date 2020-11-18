import React from 'react';
import { Grid } from '@material-ui/core';
import { GenericView } from '..';
import { GenericViewItem } from './item';

const items1: Array<GenericViewItem> = [
  {
    title: 'CSD101',
    subtitle: 'lecture',
    clock1: '14:00 - 15:30',
    clock2: 'in 20 min',
    color: 'rgba(38, 227, 139, 0.3)',
  },
  {
    title: 'CSD101',
    subtitle: 'lecture',
    clock1: '14:00 - 15:30',
    clock2: 'in 20 min',
    color: 'rgba(218, 27, 19, 0.3)',
  },
  {
    title: 'CSD101',
    subtitle: 'lecture',
    clock1: '14:00 - 15:30',
    clock2: 'in 20 min',
    color: 'rgba(18, 12, 219, 0.3)',
  },
  {
    title: 'CSD101',
    subtitle: 'lecture',
    clock1: '14:00 - 15:30',
    clock2: 'in 20 min',
    color: 'rgba(220, 212, 13, 0.3)',
  },
];

const items2: Array<GenericViewItem> = [
  {
    title: 'CSD101',
    subtitle: 'assignment 4',
    clock1: 'october 15',
    clock2: 'in 20 days',
    color: 'rgba(218, 27, 19, 0.3)',
  },
  {
    title: 'CSD101',
    subtitle: 'assignment 4',
    clock1: 'october 15',
    clock2: 'in 20 days',
    color: 'rgba(220, 212, 13, 0.3)',
  },
  {
    title: 'CSD101',
    subtitle: 'assignment 4',
    clock1: 'october 15',
    clock2: 'in 20 days',
    color: 'rgba(18, 12, 219, 0.3)',
  },
  {
    title: 'CSD101',
    subtitle: 'assignment 4',
    clock1: 'october 15',
    clock2: 'in 20 days',
    color: 'rgba(38, 227, 139, 0.3)',
  },
];

function timeClock(): string {
  return new Date().toTimeString().substring(0, 5);
}

function dateClock(): string {
  const d = new Date();
  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];
  return months[d.getMonth()] + ' ' + d.getDate();
}

const View1 = () => {
  return (
    <Grid container alignItems="stretch" spacing={2}>
      <Grid item xs={12} md={6}>
        <GenericView
          title="today"
          clock={{
            f: timeClock,
            timeout: 10000,
          }}
          items={items1}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <GenericView
          title="tasks"
          clock={{
            f: dateClock,
            timeout: 300000,
          }}
          items={items2}
        />
      </Grid>
    </Grid>
  );
};

export default View1;

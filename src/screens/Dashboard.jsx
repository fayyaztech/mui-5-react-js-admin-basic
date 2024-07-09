import { Grid } from '@mui/material';
import React from 'react';
import DashboardCard from '../components/DashboardTile';
import { AttachMoney, EventAvailable, People, School } from '@mui/icons-material';

export default function Dashboard() {
  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid xs={6} md={3}>
          <DashboardCard
            icon={School}
            title="No of Students"
            value="1200"
          />
        </Grid>
        <Grid xs={6} md={3}>
          <DashboardCard
            icon={People}
            title="No of Teachers"
            value="75"
          />
        </Grid>
        <Grid xs={6} md={3}>
          <DashboardCard
            icon={AttachMoney}
            title="Total Amount Collected"
            value="$50,000"
          />

        </Grid>
        <Grid xs={6} md={3}>

          <DashboardCard
            icon={EventAvailable}
            title="Today's Present Students"
            value="1100"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

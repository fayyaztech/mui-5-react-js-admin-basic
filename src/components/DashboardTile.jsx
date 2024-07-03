// DashboardCard.js
import React from 'react';
import { Card, Grid, Typography } from '@mui/material';

const DashboardCard = ({ icon: Icon, title, value }) => {
    return (
        <Grid container spacing={0}>
            <Card sx={{ width: '100%', padding: '10px', margin: '5px', boxSizing: 'border-box' }}>
                <Grid item xs={2} container justifyContent="center" flex="center">
                    <Icon sx={{ fontSize: 40 }} />
                </Grid>
                <Grid item xs={10}>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            overflow: 'hidden',
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        {value}
                    </Typography>
                </Grid>
            </Card>
        </Grid>
    );
};

export default DashboardCard;

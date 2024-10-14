import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';

const plans = [
    {
        title: 'Basic Plan',
        price: '$20/month',
        description: 'Access to group fitness classes.',
    },
    {
        title: 'Premium Plan',
        price: '$40/month',
        description: 'Access to classes + personalized challenges.',
    },
    {
        title: 'Elite Plan',
        price: '$80/month',
        description: 'All-inclusive personal training.',
    },
];

const PricingPlans = () => {
    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>Flexible Pricing Options</Typography>
            <Grid container spacing={4}>
                {plans.map((plan, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{plan.title}</Typography>
                                <Typography variant="h6" sx={{ marginY: 2 }}>{plan.price}</Typography>
                                <Typography variant="body2">{plan.description}</Typography>
                                <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                                    Sign Up
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PricingPlans;

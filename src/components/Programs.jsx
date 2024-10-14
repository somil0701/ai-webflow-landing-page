import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';

const Programs = () => {
    const programs = [
        {
            title: 'Fitness Challenges',
            description: 'Push your limits with our 30-day challenges designed to build strength, endurance, and confidence.',
            cta: 'Start a Challenge'
        },
        {
            title: 'Group Fitness Classes',
            description: 'Fun and energizing classes like HIIT, Yoga, and Pilates, led by top fitness experts.',
            cta: 'View Class Schedule'
        },
        {
            title: 'Personal Training',
            description: 'One-on-one personalized sessions to tailor your fitness journey.',
            cta: 'Book Your Free Consultation'
        },
    ];

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>Choose Your Fitness Path</Typography>
            <Grid container spacing={4}>
                {programs.map((program, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{program.title}</Typography>
                                <Typography variant="body2" sx={{ marginTop: 2 }}>
                                    {program.description}
                                </Typography>
                                <Button variant="outlined" color="primary" sx={{ marginTop: 2 }}>
                                    {program.cta}
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Programs;

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HealthAssessment = () => {
    return (
        <Box sx={{ padding: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>Discover Your Fitness Level</Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Take our free health and fitness assessment to understand where you are and how we can help.
            </Typography>
            <Button variant="contained" color="primary">Take the Quiz</Button>
        </Box>
    );
};

export default HealthAssessment;

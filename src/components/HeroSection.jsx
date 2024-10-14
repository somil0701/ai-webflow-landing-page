import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const HeroSection = () => {
    return (
        <Box
            sx={{
                height: '80vh',
                backgroundImage: 'url(https://media.istockphoto.com/id/515311032/photo/metal-dumbbell-on-money.jpg?s=2048x2048&w=is&k=20&c=RkWtP2As-HTlwfeAFNWuqxMRxHchV2afOPtpl_7O6dU=)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                color: '#fff',
            }}
        >
            <Typography variant="h2" component="h1">
                Transform Your Body Today!
            </Typography>
            <Typography variant="h5" component="p" sx={{ marginTop: 2 }}>
                Join our fitness challenges, classes, or personal training services.
            </Typography>
            <Button variant="contained" color="secondary" sx={{ marginTop: 4 }}>
                Join the Challenge
            </Button>
        </Box>
    );
};

export default HeroSection;

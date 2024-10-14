import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#333', color: '#fff' }}>
            <Typography variant="body2">&copy; 2024 FitLife. All rights reserved.</Typography>
            <Link href="#" color="inherit" sx={{ margin: 1 }}>Privacy Policy</Link>
            <Link href="#" color="inherit" sx={{ margin: 1 }}>Terms of Service</Link>
        </Box>
    );
};

export default Footer;

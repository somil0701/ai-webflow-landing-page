import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    FitLife
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Programs</Button>
                <Button color="inherit">Contact</Button>
                <Button color="inherit" variant="outlined">Sign Up</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

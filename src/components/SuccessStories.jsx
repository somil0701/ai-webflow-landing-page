import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const testimonials = [
    {
        name: 'John Doe',
        story: 'Joining the fitness challenges helped me lose 15 pounds in 2 months!',
    },
    {
        name: 'Jane Smith',
        story: 'The personal training sessions were life-changing. My coach pushed me to my limits.',
    },
];

const SuccessStories = () => {
    return (
        <Box sx={{ padding: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>Our Members’ Success</Typography>
            <Grid container spacing={4}>
                {testimonials.map((testimonial, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1">{testimonial.story}</Typography>
                                <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
                                    - {testimonial.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SuccessStories;

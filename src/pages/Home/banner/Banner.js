import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,

    backgroundSize: 'cover'
}

const verticalCenter = {
    display: 'flex',
    height: 450,
    alignItems: 'center'
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <Box>
                        <Typography variant="h3">Your New Smile <br /> Starts here</Typography>
                        <Typography variant="h6" sx={{ my: 4, fontSize: 14, fontWeight: 300, color: 'gray' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, optio. Est deleniti autem assumenda dicta exercitationem iure facilis saepe quasi ratione, itaque nam deserunt excepturi consectetur adipisci architecto animi obcaecati soluta temporibus nesciunt eum. Amet itaque accusamus alias excepturi cum!</Typography>
                        <Button variant="contained" sx={{ bgcolor: '#4EF3F5' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: 350 }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container >
    )
}

export default Banner

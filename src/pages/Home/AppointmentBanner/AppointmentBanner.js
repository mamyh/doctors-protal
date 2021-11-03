import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(46, 28, 85,.8 )',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: 175,

}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1, color: 'white' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <img style={{ width: 400, marginTop: -120 }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={8} >
                    <Typography variant="h6" sx={{ my: 3, color: '#4EF3F5' }} >
                        Appointment
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 3 }}>
                        Make an Appointment today
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'white', mb: 3, fontSize: 14, fontWeight: 30 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos dolorem ducimus quas nulla quibusdam, dignissimos culpa quis, doloribus iure enim nostrum. Voluptas temporibus ea optio nihil quod sequi qui fugit veniam id facilis, laborum esse eveniet at? Eum, neque.
                    </Typography>
                    <Button variant="contained" sx={{ bgcolor: '#4EF3F5' }}>Learn more</Button>
                </Grid>

            </Grid>
        </Box>
    )
}

export default AppointmentBanner

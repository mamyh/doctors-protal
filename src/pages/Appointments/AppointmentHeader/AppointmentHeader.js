import { Container, Grid } from '@mui/material'
import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from '../../shared/Calender/Calendar';

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Calendar data={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
}

export default AppointmentHeader

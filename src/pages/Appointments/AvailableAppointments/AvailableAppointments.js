import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Appointment/booking/Booking';

const bookings = [{
    id: 1,
    name: 'Teeth Orthodontics',
    time: '8.00 AM - 9.00AM',
    available: 10
}, {
    id: 2,
    name: 'Cosmetic Dentistry',
    time: '10:05 AM - 11:30AM',
    available: 9
}, {
    id: 3,
    name: 'Teeth Cleaning',
    time: '5.00 AM - 6:30PM',
    available: 20
}, {
    id: 4,
    name: 'Cavity Protection',
    time: '7.00 AM - 9.30AM',
    available: 5
}, {
    id: 5,
    name: 'Pediatric Dental',
    time: '8.00 AM - 9.00AM',
    available: 10
}, {
    id: 6,
    name: 'Oral Surgery',
    time: '7.00 AM - 12.00AM',
    available: 15
}]

const AvailableAppointments = ({ date }) => {

    return (
        <Container sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', color: 'info.main', fontWeight: 600, my: 6 }}>
                Availabel Appointments on {date.toDateString()}
            </Typography>
            <Grid container spacing={3}>
                {bookings.map(booking => <Booking key={booking.id} date={date} booking={booking}></Booking>)}
            </Grid>

        </Container>

    )
}

export default AvailableAppointments;

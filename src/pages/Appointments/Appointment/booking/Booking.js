import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import BookingModal from '../../bookingModal/BookingModal';


const Booking = ({ booking, date, setIsSuccess }) => {
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    const { id, name, time, available } = booking;
    return (
        <>
            <Grid item xs={12} sm={6} md={4} >
                <Paper elevation={2} sx={{ p: 4 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" component="div" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {available} spaces available
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal booking={booking} date={date} openBooking={openBooking} isSuccess={setIsSuccess} handleBookingClose={handleBookingClose}></BookingModal>
        </>
    )
}

export default Booking

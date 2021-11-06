import { Backdrop, Button, Fade, Modal, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { user } = useAuth();
    const { name, time } = booking;
    const handleBook = (e) => {
        alert('booking ');
        handleBookingClose();
        e.preventDefault()
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form>
                        <TextField
                            disabled
                            id="outlined-size-small"
                            sx={{ width: '90%', m: 1 }}
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: '90%', m: 1 }}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: '90%', m: 1 }}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: '90%', m: 1 }}
                            defaultValue="your phone"
                            size="small"
                        />
                        <TextField
                            disabled
                            id="outlined-size-small"
                            sx={{ width: '90%', m: 1 }}
                            defaultValue={date.toDateString()}
                            size="small"
                        />

                        <Button variant="contained" sx={{ m: 1 }} onClick={handleBook} type="submit"> Book </Button>

                    </form>
                </Box>
            </Fade>
        </Modal>
    )
}

export default BookingModal;

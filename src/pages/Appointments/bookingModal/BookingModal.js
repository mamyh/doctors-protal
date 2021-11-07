import { Backdrop, Button, Fade, Modal, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react';
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
const BookingModal = ({ openBooking, handleBookingClose, booking, date, isSuccess }) => {
    const { user } = useAuth();
    const { name, time } = booking;
    const initialInfo = { email: user.email, patientName: user.displayName, phone: '' }
    const [bookingInfo, setbookingInfo] = useState(initialInfo);


    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        //console.log(field, value, newInfo);
        newInfo[field] = value;
        setbookingInfo(newInfo);
    }
    const handleBook = (e) => {
        const data = { ...bookingInfo, serviceName: name, appointTime: time, appointDate: date.toLocaleDateString() };
        console.log(data);
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                isSuccess(true);
                handleBookingClose();
            }
        });

        e.preventDefault()
    }
    const { email, patientName, phone } = bookingInfo;
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
                            name="patientName"
                            onBlur={handleOnBlur}

                            defaultValue={patientName}
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: '90%', m: 1 }}
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={email}
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: '90%', m: 1 }}
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue={phone}
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

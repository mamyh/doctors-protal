import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Booking = ({ booking }) => {
    const { id, name, time, available } = booking;
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={2} sx={{ p: 4 }}>
                <Typography variant="h5">
                    {name}
                </Typography>
                <Typography variant="h5">
                    {time}
                </Typography>
                <Typography variant="h5">
                    {available} spaces available
                </Typography>
                <Link to="/">Booking now</Link>
            </Paper>
        </Grid>
    )
}

export default Booking

import React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const Service = ({ service }) => {
    const { name, img, description } = service;
    return (
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardMedia
                component="img"
                style={{ width: 'auto', height: "80px", margin: '0 auto' }}
                image={img}
                alt="Paella dish"
            />
            <CardContent>

                <Typography sx={{ pt: 2, textAlign: 'center' }} variant="h5" component="div">
                    {name}
                </Typography>

                <Typography sx={{ py: 3, textAlign: 'center' }} variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>

        </Card>
    )
}

export default Service

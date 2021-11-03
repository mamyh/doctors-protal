import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import fluoride from './../../../images/fluoride.png';
import whitening from './../../../images/whitening.png';
import Cavity from './../../../images/cavity.png';
import Service from './Service/Service';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));
const services = [
    {
        name: 'Fluoride Treatment',
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt blanditiis aperiam veniam quae ipsa ratione libero! Dolore rem labore perspiciatis sequi ea rerum optio, tempore recusandae soluta adipisci facere nihil ullam consectetur, sed quasi voluptate. Obcaecati sapiente aut provident aspernatur!`,
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt blanditiis aperiam veniam quae ipsa ratione libero! Dolore rem labore perspiciatis sequi ea rerum optio, tempore recusandae soluta adipisci facere nihil ullam consectetur, sed quasi voluptate. Obcaecati sapiente aut provident aspernatur!`,
        img: Cavity
    },

    {
        name: 'Teeth Whitening',
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt blanditiis aperiam veniam quae ipsa ratione libero! Dolore rem labore perspiciatis sequi ea rerum optio, tempore recusandae soluta adipisci facere nihil ullam consectetur, sed quasi voluptate. Obcaecati sapiente aut provident aspernatur!`,
        img: whitening,
    }

]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ pt: 2, textAlign: 'center', color: 'success.main' }} variant="h5" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ py: 2, textAlign: 'center' }} variant="h4" component="div">
                    Sevices we provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Service service={service}></Service>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Services

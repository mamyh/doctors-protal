import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Login = () => {
    const [loginDate, setLoginDate] = useState({})
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginDate };
        newData[field] = value;
        setLoginDate(newData);
    }
    const handleLogin = e => {
        alert('logining')
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 25 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom >
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standerd-basic"
                            label="Your Email"
                            variant="standard"
                            onChange={handleOnChange}
                            name="email"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standerd-basic"
                            label="Your Password"
                            variant="standard"
                            type="password"
                            onChange={handleOnChange}
                            name="password"
                        />

                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit" >Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">

                            <Button color="inherit">New User ? Please Register</Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login

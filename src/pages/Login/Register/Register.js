
import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';


const Register = () => {
    const [loginDate, setLoginDate] = useState({})
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginDate };
        newData[field] = value;
        setLoginDate(newData);
    }
    const handleLogin = e => {
        e.preventDefault();
        if (loginDate.password !== loginDate.cPassword) {
            alert('password did not matched!!');
            return;
        }
        if (loginDate.password.length < 6) {
            alert('Password must be 6 or more characters long');
            return;
        }

    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 25 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom >
                        Register
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standerd-basic"
                            label="Your Email"
                            type="email"
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
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standerd-basic"
                            label="Confirm Password"
                            variant="standard"
                            type="password"
                            onChange={handleOnChange}
                            name="cPassword"
                        />

                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit" >Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login">

                            <Button color="inherit">Already Register ? Please Login</Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Register

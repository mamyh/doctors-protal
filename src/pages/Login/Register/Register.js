
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';


const Register = () => {
    const { registerUser, isLoading, user, authError } = useAuth();
    const history = useHistory();
    const [registerData, setRegisterData] = useState({});
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...registerData };
        newData[field] = value;
        setRegisterData(newData);
    }
    const handleRegister = e => {
        e.preventDefault();
        if (registerData.password !== registerData.cPassword) {
            alert('password did not matched!!');
            return;
        }
        if (registerData.password.length < 6) {
            alert('Password must be 6 or more characters long');
            return;
        };
        registerUser(registerData.name, registerData.email, registerData.password, history);

    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 25 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom >
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleRegister}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standerd-basic"
                            label="Your Name"
                            variant="standard"
                            onBlur={handleOnBlur}
                            name="name"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standerd-basic"
                            label="Your Email"
                            type="email"
                            variant="standard"
                            onBlur={handleOnBlur}
                            name="email"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standerd-basic"
                            label="Your Password"
                            variant="standard"
                            type="password"
                            onBlur={handleOnBlur}
                            name="password"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standerd-basic"
                            label="Confirm Password"
                            variant="standard"
                            type="password"
                            onBlur={handleOnBlur}
                            name="cPassword"
                        />

                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit" >Register</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login">

                            <Button color="inherit">Already Register ? Please Login</Button>
                        </NavLink>
                    </form>}
                    {
                        isLoading && <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    }
                    {
                        user?.email && <Alert severity="success"> User is successfully created .</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Register

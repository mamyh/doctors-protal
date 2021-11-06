import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/login.png';

const Login = () => {
    const [loginDate, setLoginDate] = useState({});
    const { login, isLoading, user, authError, signInWithGoogle } = useAuth();
    //for the redirect page 
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginDate };
        newData[field] = value;
        setLoginDate(newData);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    const handleLogin = e => {

        e.preventDefault();
        login(loginDate.email, loginDate.password, location, history);
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
                            onBlur={handleOnChange}
                            name="email"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standerd-basic"
                            label="Your Password"
                            variant="standard"
                            type="password"
                            onBlur={handleOnChange}
                            name="password"
                        />

                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit" >Login</Button>

                    </form>
                    <p>-----------------OR-----------------</p>
                    <Button style={{ display: 'block' }} onClick={handleGoogleSignIn} variant="contained">Sign In With Google</Button>
                    <NavLink style={{ textDecoration: 'none' }} to="/register">

                        <Button color="inherit">New User ? Please Register</Button>
                    </NavLink>
                    {isLoading && <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>}
                    {user?.email && <Alert severity="success"> You are Logged In .</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginImg} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login;

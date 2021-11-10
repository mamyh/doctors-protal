import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Admin = ({ children, ...rest }) => {
    const { user, isLoading, isAdmin } = useAuth();
    if (isLoading) {
        return <Box sx={{ display: 'flex', height: '100vh' }}>
            <CircularProgress />
        </Box>
    }

    return (
        <Route
            {...rest}
            render={({ location }) => (user?.email && isAdmin) ? children : <Redirect to={{ pathname: '/', state: { from: location } }}></Redirect>}
        />
    )
}

export default Admin;

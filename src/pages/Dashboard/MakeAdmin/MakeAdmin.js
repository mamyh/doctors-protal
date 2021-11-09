import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { isAdmin, user } = useAuth()
    const [userObject, serUserObject] = useState({});
    const [email, setEmail] = useState(user.email);
    const [success, setSuccess] = useState(false);

    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...userObject };
        newUser[field] = value;
        serUserObject(newUser);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/users/admin`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userObject)
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                setEmail('');
                setSuccess(true);
            }
        });
    }
    return (
        <div>
            <h1>make an admin</h1>
            <form onSubmit={handleSubmit}>
                <TextField sx={{ width: '50%' }} id="standard-basic" onBlur={handleBlur} name="email" type="email" defaultValue={email} variant="standard" />
                <Button sx={{ ml: 3, }} type="submit" variant="contained">Admin</Button>
            </form>
            {success && <Alert severity="success">{email} is Admin now </Alert>}
        </div>
    )
}

export default MakeAdmin

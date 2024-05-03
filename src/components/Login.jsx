import React, { useState } from 'react';
import { Card, Typography, Grid, TextField, IconButton, InputAdornment, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import login from '../assets/login.jpg';
import { useNavigate } from 'react-router-dom';
import GradientCircularProgress from '../custom/Loaders';

let BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const loginUser = () => {

        if (!data.email || !data.password) {
            alert('Please fill in all fields');
            return;
        }

        setLoading(true);

        try {

            fetch(`${BASE_URL}/cabzen/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {

                    if (data.status === 'success') {
                        localStorage.setItem('token', data.accessToken);
                        navigate('/');
                        setLoading(false);
                    } else {
                        alert(data.message);
                        setLoading(false);
                        return;

                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ height: '100vh', backgroundColor: '#FFF7B0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: '80%', maxWidth: 800, padding: '20px', borderRadius: '10px', backgroundColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={login} alt="Cabzen Logo" style={{ width: '100%', maxHeight: 500, borderRadius: '10px' }} />
                    </Grid>
                    <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        {/* Right half - Text fields */}
                        <Typography variant="h5" style={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>Buckle up for seamless rides ahead!</Typography>
                        <TextField
                            label="Email"
                            variant="filled"
                            fullWidth
                            style={{ marginBottom: '20px', backgroundColor: 'white' }}
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                        />
                        <TextField
                            label="Password"
                            variant="filled"
                            fullWidth
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleTogglePasswordVisibility}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            style={{ marginBottom: '20px', backgroundColor: 'white' }}
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                        />
                        <Button variant="contained" fullWidth style={{ backgroundColor: 'orange', color: 'white', marginBottom: '20px' }} onClick={loginUser}>
                            {loading ? <GradientCircularProgress /> : 'Login'}
                        </Button>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body2" style={{ color: 'white', textAlign: 'center' }}>Don't have an account? <a href="/register" style={{ color: 'orange', textDecoration: 'none' }}>Register</a></Typography>
                            <Typography variant="body2" style={{ color: 'white', cursor: 'pointer' }}><a href='/forgot-password' style={{ color: 'orange', textDecoration: 'none' }}>Forgot Password?</a></Typography>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}

export default Login;

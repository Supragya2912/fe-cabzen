import React, { useState } from 'react';
import { Card, Typography, Grid, TextField, Button, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import register from '../assets/register.jpg';
import { useNavigate } from 'react-router-dom';
let baseUrl = process.env.REACT_APP_SERVER_BASE_URL;


const Register = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        userName: '',
        phone: '',
        role: 'user' 
    });

    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            
            await fetch(`${baseUrl}/cabzen/auth/register-user`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.success){
                    
                    navigate('/login');
                    
                }else{
                    alert(data.message);
                }
            });
            
        }catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ height: '100vh', backgroundColor: '#FFF7B0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: '80%', maxWidth: 800, padding: '20px', borderRadius: '10px', backgroundColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={register} alt="Cabzen Logo" style={{ width: '100%', minHeight: 500,borderRadius: '10px' }} />
                    </Grid>
                    <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        {/* Full form */}
                        <Typography variant="h5" style={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>Create an Account</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                name="fullName"
                                label="Full Name"
                                variant="filled"
                                fullWidth
                                value={formData.fullName}
                                onChange={handleChange}
                                style={{ marginBottom: '20px', backgroundColor: 'white' }}
                            />
                            <TextField
                                name="email"
                                label="Email"
                                variant="filled"
                                fullWidth
                                value={formData.email}
                                onChange={handleChange}
                                style={{ marginBottom: '20px', backgroundColor: 'white' }}
                            />
                            <TextField
                                name="password"
                                label="Password"
                                variant="filled"
                                fullWidth
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                style={{ marginBottom: '20px', backgroundColor: 'white' }}
                            />
                            <TextField
                                name="userName"
                                label="Username"
                                variant="filled"
                                fullWidth
                                value={formData.userName}
                                onChange={handleChange}
                                style={{ marginBottom: '20px', backgroundColor: 'white' }}
                            />
                            <TextField
                                name="phone"
                                label="Phone"
                                variant="filled"
                                fullWidth
                                value={formData.phone}
                                onChange={handleChange}
                                style={{ marginBottom: '20px', backgroundColor: 'white' }}
                            />
                            <FormControl variant="standard"
                                fullWidth>
                                <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    label="Role"
                                    style={{ marginBottom: '20px', backgroundColor: 'white', height: 55 }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>

                                    <MenuItem value={"driver"}>Driver</MenuItem>
                                    <MenuItem value={"user"}>User</MenuItem>
                                </Select>
                            </FormControl>
                            <Button type="submit" variant="contained" fullWidth style={{ backgroundColor: 'orange', color: 'white', marginBottom: '20px' }}>
                                Register
                            </Button>
                        </form>
                        <Typography variant="body2" style={{ color: 'white', textAlign: 'center' }}>Already have an account? <a href="/login" style={{ color: 'orange', textDecoration: 'none' }}>Login here</a></Typography>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}

export default Register;

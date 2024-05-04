import React, {useState} from 'react';
import { Card, Typography, Grid, TextField,  Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GradientCircularProgress from '../custom/Loaders';
import password from '../assets/password.jpeg';


let BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

const ResetPassword = () => {


    const [ data, setData] = useState({
        email: '',
        otp: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
   

    const resetPassword = () => {

        if(!data.email || !data.otp || !data.newPassword || !data.confirmPassword){
            alert('Please fill in all fields');
            return;
        }

        if(data.newPassword !== data.confirmPassword){
            alert('Passwords do not match');
            return;
        }

        setLoading(true);

        try {

            fetch(`${BASE_URL}/cabzen/auth/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {

                    if (data.status === 'success') {
                       
                        navigate('/login');
                        setLoading(false);
                    }
                    else {
                       
                        setLoading(false);
                        return;
                    }

                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ height: '100vh', backgroundColor: '#FFF7B0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: '80%', maxWidth: 800, padding: '20px', borderRadius: '10px', backgroundColor: '#ffdd72', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={password} alt="Cabzen Logo" style={{ width: '100%', maxHeight: 500,borderRadius: '10px' }} />
                    </Grid>
                    <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        {/* Right half - Text fields */}
                        <Typography variant="h5" style={{ color: 'black', marginBottom: '20px', textAlign: 'center', fontWeight:'bold' }}>Reset Password</Typography>
                        <Typography style={{ color: 'black', marginBottom: '20px', fontSize:15, textAlign:'center' }}>Enter your new password for the account</Typography>
                    
                        <TextField
                            label="Enter your email address"
                            variant="filled"
                            fullWidth
                            style={{ marginBottom: '20px', backgroundColor: 'white' }}
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                        />
                       
                         <TextField
                            label="Enter OTP sent to your email"
                            variant="filled"
                            fullWidth
                            style={{ marginBottom: '20px', backgroundColor: 'white' }}
                            value={data.otp}
                            onChange={(e) => setData({ ...data, otp: e.target.value })}
                        />
                            <TextField
                            label="New Password"
                            variant="filled"
                            fullWidth
                            style={{ marginBottom: '20px', backgroundColor: 'white' }}
                            value = {data.newPassword}
                            onChange={(e) => setData({ ...data, newPassword: e.target.value })}
                        />
                          <TextField
                            label="Confirm Password"
                            variant="filled"
                            fullWidth
                            style={{ marginBottom: '20px', backgroundColor: 'white' }}
                            value = {data.confirmPassword}
                            onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                        />
                        <Button variant="contained" fullWidth style={{ backgroundColor: 'orange', color: 'white', marginBottom: '20px' }} onClick={resetPassword}>
                            {loading ? <GradientCircularProgress /> : 'Reset and Sign In'}
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}

export default ResetPassword;

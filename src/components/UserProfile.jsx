import React, { useState } from 'react';
import Navbar from '../custom/Navbar';
import { Grid, Typography, Button, Paper, IconButton, TextField } from '@mui/material';
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiEditLine } from "react-icons/ri";
import { Visibility, VisibilityOff } from '@mui/icons-material';

const UserProfile = () => {
    const navigate = useNavigate();
    const [settings, setSettings] = useState(false);
    const userData = useSelector(state => state.user);
    const [location, setLocation] = useState({
        address: '',
        city: '',
        state: '',
        pincode: ''
    });
    const [password, setPassword] = useState({});
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleAddressSubmit = () => {
        if (location.address === '' || location.city === '' || location.state === '' || location.pincode === '') {
            alert('Please fill all the fields');
            return;
        }

        try {
            fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/cabzen/auth/updateUser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    location: location
                })
            }).then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert(data.message);
                        navigate('/profile');
                    } else {
                        alert(data.message);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleUpdatePassword = () => {
        if (password.oldPassword === '' || password.newPassword === '' || password.confirmPassword === '') {
            alert('Please fill all the fields');
            return;
        }

        if (password.newPassword !== password.confirmPassword) {
            alert('New Password and Confirm Password should be same');
            return;
        }

        try {
            fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/cabzen/auth/update-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    oldPassword: password.oldPassword,
                    newPassword: password.newPassword,
                    confirmPassword: password.confirmPassword
                })
            }).then(response => response.json())
                .then(data => {

                    if (data.status === "success") {
                       setPassword({
                            oldPassword: '',
                            newPassword: '',
                            confirmPassword: ''
                       })
                        alert(data.message);

                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, overflowY: 'auto' }}>
                <Navbar />
            </div>
            <Grid container style={{ height: "100vh" }}>
                <Grid item xs={12} sm={3} style={{ backgroundColor: '#ffe6c1' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', marginTop: 60 }}>
                        <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="User Avatar" style={{ width: 100, height: 100, borderRadius: '50%' }} />
                        <Typography variant="h5" style={{ marginTop: 10, fontWeight: "bold" }}>{userData?.data?.fullName}</Typography>
                    </div>
                    <hr color='orange' />
                    <div>
                        <div>
                            <Button style={{ width: '100%', textAlign: 'left', color: 'black' }}
                                onClick={() => {
                                    setSettings(false)
                                }}
                            >
                                <FaUser style={{ marginRight: 10 }} />
                                Profile
                            </Button>
                        </div>
                        <hr color='orange' />
                        <div>
                            <Button style={{ width: '100%', textAlign: 'left', color: 'black' }} onClick={() => setSettings(true)}>
                                <IoSettings style={{ marginRight: 10 }} />
                                Settings
                            </Button>
                        </div>
                        <hr color='orange' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={9} style={{ backgroundColor: '#eeeeee' }}>
                    <div style={{ marginTop: 80, padding: 20 }}>
                        {settings ? (
                            <Paper>
                                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography variant="h5" style={{ padding: 20, fontWeight: "bold" }}>Update Password</Typography>
                                </div>
                                <hr />
                                <Grid container>
                                    <Grid item xs={12} sm={6} style={{ padding: 30 }}>
                                        <Typography style={{ fontWeight: "bold" }}>Old Password</Typography>
                                        <TextField
                                            fullWidth
                                            type={showOldPassword ? "text" : "password"}
                                            name="oldPassword"
                                            value={password.oldPassword}
                                            onChange={(e) => setPassword({ ...password, oldPassword: e.target.value })}
                                            InputProps={{
                                                endAdornment: (
                                                    <IconButton
                                                        onClick={() => setShowOldPassword(!showOldPassword)}
                                                        onMouseDown={(e) => e.preventDefault()}
                                                    >
                                                        {showOldPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                ),
                                            }}
                                        />
                                        <Typography style={{ fontWeight: "bold", marginTop: 20 }}>New Password</Typography>
                                        <TextField
                                            fullWidth
                                            type={showNewPassword ? "text" : "password"}
                                            name="newPassword"
                                            value={password.newPassword}
                                            onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
                                            InputProps={{
                                                endAdornment: (
                                                    <IconButton
                                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                                        onMouseDown={(e) => e.preventDefault()}
                                                    >
                                                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} style={{ padding: 30 }}>
                                        <Typography style={{ fontWeight: "bold" }}>Confirm Password</Typography>
                                        <TextField
                                            fullWidth
                                            type={showConfirmPassword ? "text" : "password"}
                                            name="confirmPassword"
                                            value={password.confirmPassword}
                                            onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })}
                                            InputProps={{
                                                endAdornment: (
                                                    <IconButton
                                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                        onMouseDown={(e) => e.preventDefault()}
                                                    >
                                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} container justifyContent="flex-end">
                                        <Button type="submit" variant="contained" style={{ backgroundColor: 'orange', color: 'black', marginBottom: 10, marginRight: 10 }} onClick={handleUpdatePassword}>Submit</Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        ) : (
                            <Paper>
                                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography variant="h5" style={{ padding: 20, fontWeight: "bold" }}>User Profile</Typography>
                                    <IconButton style={{ marginRight: 10 }}>
                                        <RiEditLine size={25} />
                                    </IconButton>
                                </div>
                                <hr />
                                <Grid container>
                                    <Grid item xs={12} sm={6} style={{ padding: 30 }}>
                                        <Typography style={{ fontWeight: "bold" }}>Full Name</Typography>
                                        <Typography>{userData?.data?.fullName}</Typography>
                                        <Typography style={{ fontWeight: "bold", marginTop: 20 }}>Email</Typography>
                                        <Typography>{userData?.data?.email}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} style={{ padding: 30 }}>
                                        <Typography style={{ fontWeight: "bold" }}>Phone</Typography>
                                        <Typography>{userData?.data?.phone}</Typography>
                                        <Typography style={{ fontWeight: "bold", marginTop: 20 }}>Username</Typography>
                                        <Typography>{userData?.data?.userName}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        )}
                        {!settings && (
                            <Paper style={{ marginTop: 20 }}>
                                {userData?.data?.location ? (
                                    <>
                                        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                            <Typography variant="h5" style={{ padding: 20, fontWeight: "bold" }}>Address</Typography>
                                        </div>
                                        <hr />
                                        <Grid container>
                                            <Grid item xs={12} sm={6} style={{ padding: 30 }}>
                                                <Typography style={{ fontWeight: "bold" }}>Address</Typography>
                                                <Typography>{userData?.data?.location?.address}</Typography>
                                                <Typography style={{ fontWeight: "bold", marginTop: 20 }}>City</Typography>
                                                <Typography>{userData?.data?.location?.city}</Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={6} style={{ padding: 30 }}>
                                                <Typography style={{ fontWeight: "bold" }}>State</Typography>
                                                <Typography>{userData?.data?.location?.state}</Typography>
                                                <Typography style={{ fontWeight: "bold", marginTop: 20 }}>Pincode</Typography>
                                                <Typography>{userData?.data?.location?.pincode}</Typography>
                                            </Grid>
                                        </Grid>
                                    </>
                                ) : (
                                    <>
                                        <div style={{ padding: 20 }}>
                                            <Typography variant="h5" style={{ fontWeight: "bold" }}>Add Address</Typography>
                                            <Typography style={{ marginTop: 10 }}>Add your address</Typography>
                                        </div>
                                        <hr />
                                        <div style={{ padding: 20 }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Address"
                                                        name="address"
                                                        value={location.address}
                                                        onChange={(e) => setLocation({ ...location, address: e.target.value })}
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        fullWidth
                                                        label="State"
                                                        name="state"
                                                        value={location.state}
                                                        onChange={(e) => setLocation({ ...location, state: e.target.value })}
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        fullWidth
                                                        label="City"
                                                        name="city"
                                                        value={location.city}
                                                        onChange={(e) => setLocation({ ...location, city: e.target.value })}
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        fullWidth
                                                        label="Pincode"
                                                        name="pincode"
                                                        value={location.pincode}
                                                        onChange={(e) => setLocation({ ...location, pincode: e.target.value })}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                    <Button type="submit" variant="contained" style={{ backgroundColor: 'orange', color: 'black' }} onClick={handleAddressSubmit}>Submit</Button>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </>
                                )}
                            </Paper>
                        )}
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default UserProfile;

import React, { useState } from 'react'
import Navbar from '../custom/Navbar'
import { Grid, Typography, Button, Paper, IconButton, TextField } from '@mui/material'
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiEditLine } from "react-icons/ri";


const UserProfile = () => {

    const navigate = useNavigate();
    const [settings, setSettings] = useState(false);
    const userData = useSelector(state => state.user);
    console.log("user", userData)


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
                        {/* <Typography variant="h6" style={{ marginLeft: 20, marginTop: 20 }}>User Info</Typography> */}
                        <hr color='orange' />
                        <div>
                            <Button style={{ width: '100%', textAlign: 'left', color: 'black' }} onClick={
                                () => {
                                    setSettings(true)
                                }
                            }>
                                <IoSettings style={{ marginRight: 10 }} />
                                Settings
                            </Button>
                        </div>
                        <hr color='orange' />

                    </div>
                </Grid>
                <Grid item xs={12} sm={9} style={{ backgroundColor: '#eeeeee' }}>
                    <div style={{
                        marginTop: 80,
                        padding: 20,
                    }}>
                        {
                            settings ? (

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
                                                type="password"
                                                name="oldPassword"
                                            />
                                            <Typography style={{ fontWeight: "bold", marginTop: 20 }}>New Password</Typography>
                                            <TextField
                                                fullWidth
                                                type="password"
                                                name="newPassword"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} style={{ padding: 30 }}>
                                            <Typography style={{ fontWeight: "bold" }}>Confirm Password</Typography>
                                            <TextField
                                                fullWidth
                                                type="password"
                                                name="confirmPassword"
                                            />
                                        </Grid>
                                        <Grid item xs={12} container justifyContent="flex-end"> {/* Updated Grid item */}
                                            <Button type="submit" variant="contained" style={{ backgroundColor: 'orange', color: 'black', marginBottom: 10, marginRight: 10 }}>Submit</Button>
                                        </Grid>
                                    </Grid>
                                </Paper>

                            ) : (
                                <>

                                    <Paper>
                                        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                            <Typography variant="h5" style={{ padding: 20, fontWeight: "bold" }}>User Profile</Typography>
                                            <IconButton style={{ marginRight: 10 }}> {/* Adjust margin as needed */}
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
                                </>

                            )
                        }

                        {
                            !settings && (
                                <Paper style={{ marginTop: 20 }}>

                                    <div style={{ padding: 20 }}>
                                        <Typography variant="h5" style={{ fontWeight: "bold" }}>Add Address</Typography>
                                        <Typography style={{ marginTop: 10 }}>Add your address</Typography>
                                    </div>
                                    <hr />
                                    {
                                        userData?.data?.address ? (
                                            /* JSX to render when address is available */
                                            <div>
                                                {/* Include your JSX for rendering address */}
                                            </div>
                                        ) : (
                                            /* JSX to render when address is not available */
                                            <div style={{ padding: 20 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            fullWidth
                                                            label="Address Line 1"
                                                            name="addressLine1"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            fullWidth
                                                            label="Address Line 2"
                                                            name="addressLine2"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <TextField
                                                            fullWidth
                                                            label="State"
                                                            name="state"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <TextField
                                                            fullWidth
                                                            label="City"
                                                            name="city"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <TextField
                                                            fullWidth
                                                            label="Pincode"
                                                            name="pincode"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <Button type="submit" variant="contained" style={{ backgroundColor: 'orange', color: 'black' }}>Submit</Button>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        )
                                    }
                                </Paper>
                            )
                        }

                    </div >
                </Grid >
            </Grid >

        </>
    )
}

export default UserProfile
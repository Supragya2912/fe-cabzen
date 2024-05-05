import React from 'react'
import Navbar from '../custom/Navbar'
import { Grid, Typography, Button, Paper, IconButton, TextField } from '@mui/material';
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiEditLine } from "react-icons/ri";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { userSuccess } from '../redux/reducers/user';
import { FaIdCard } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa6";

const Admin = () => {

    const [settings, setSettings] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const userData = useSelector((state) => state.user);
    console.log(userData);

    const navigate = useNavigate();



    return (
        <>
            <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
                <Navbar />
            </div>
            <Grid container style={{ height: "100vh" }}>
                <Grid item xs={12} sm={3} style={{ backgroundColor: '#ffe6c1' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', marginTop: 60 }}>
                        <Typography variant='h5' style={{ color: 'black', fontWeight: "bold" }}>Admin Dashboard</Typography>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px',marginTop: 5 }}>
                            <Typography variant='h6' style={{ color: 'black' }}>{userData?.data?.fullName}</Typography>
                            <Typography  style={{ color: 'black', fontWeight:"bold" }}> ({userData?.data?.role && userData.data.role.toUpperCase()})</Typography>
                        </div>
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
                               Users
                            </Button>
                        </div>
                        <hr color='orange' />
                        <div>
                            <Button style={{ width: '100%', textAlign: 'left', color: 'black' }} onClick={() => setSettings(true)}>
                            <FaIdCard style={{marginRight: 10}}/>
                                Drivers
                            </Button>
                        </div>
                        <hr color='orange' />
                        <div>
                            <Button style={{ width: '100%', textAlign: 'left', color: 'black' }} onClick={() => setSettings(true)}>
                            <FaCarAlt style={{marginRight: 10}}/>
                              Brands
                            </Button>
                        </div>
                        <hr color='orange' />
                        <div>
                            <Button style={{ width: '100%', textAlign: 'left', color: 'black' }} onClick={() => setSettings(true)}>
                            <FaTaxi  style={{marginRight: 10}}/>
                             Cabs
                            </Button>
                        </div>
                        <hr color='orange' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={9} style={{ backgroundColor: '#eeeeee' }}>
                    <div style={{ marginTop: 80, padding: 20 }}>

                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Admin
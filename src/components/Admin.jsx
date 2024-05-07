import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../custom/Navbar'
import { Grid, Typography, Button } from '@mui/material';
import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaIdCard } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa6";
import CustomTable from '../custom/CustomTable';
let BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

const Admin = () => {

    const [activeTabs, setActiveTabs] = useState('users');
    const [usersData, setUsersData] = useState([]);
    const [driverData, setDriverData] = useState([]);
    const [brandData, setBrandData] = useState([]);
    const [cabData, setCabData] = useState([]);
    const userData = useSelector((state) => state.user);
    const token = localStorage.getItem('token');


    const getUsers = useCallback( async () => {
        try {
            await fetch(`${BASE_URL}/cabzen/getAllUsers`, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    "page": "1"
                })

            })
                .then(response => response.json())

                .then(data => {

                    if (data.status === 'success') {
                        setUsersData(data.data);
                    }
                    else {
                        // alert(data.message);
                        return;
                    }

                })
                .catch((error) => {
                    console.error('Error:', error);
                }
                );

        } catch (error) {
            console.log(error);
        }
    },[token]);

    const getDrivers = useCallback(async () => {
        try {
            await fetch(`${BASE_URL}/cabzen/getAllDrivers`, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    "page": "1"
                })

            })

                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        setDriverData(data.data);
                    }
                    else {
                        // alert(data.message);
                        return;
                    }

                }

                )
                .catch((error) => {
                    console.error('Error:', error);
                }
                );

        } catch (error) {
            console.log(error);
        }
    },[
        token
    ],[token]);

    const getBrands = useCallback(async () => {
        try {
            await fetch(`${BASE_URL}/cabzen/listAllBrands`, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    "page": "1"
                })
            })
                .then(response => response.json())
                .then(data => {

                    if (data.status === 'success') {
                        setBrandData(data.data);
                    }
                    else {
                        return;
                    }
                }
                )
                .catch((error) => {
                    console.error('Error:', error);
                }
                );

        } catch (error) {
            console.log(error);
        }

    },[token]);

    const getCabs = useCallback(async () => {

        try {
            await fetch(`${BASE_URL}/cabzen/listAllCabs`, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    "page": "1"
                })

            })

                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        setCabData(data.data);
                    }
                    else {
                        return;
                    }
                }
                )
                .catch((error) => {
                    console.error('Error:', error);
                }

                );

        } catch (error) {
            console.log(error);
        }

    },[token]);

    const renderTabContent = () => {
        switch (activeTabs) {
            case 'users':
                return <CustomTable data={usersData} />;
            case 'drivers':
                return <CustomTable data={driverData} />;
            case 'brands':
                return <CustomTable data={brandData} />;
            case 'cabs':
                return <CustomTable data={cabData} />;
            default:
                return null;
        }
    };

    useEffect(() => {
        getUsers();
        getDrivers();
        getBrands();
        getCabs();
    }, [getBrands, getDrivers, getUsers, getCabs]);

    return (
        <>
            <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
                <Navbar />
            </div>
            <Grid container style={{ height: "100vh" }}>
                <Grid item xs={12} sm={3} style={{ backgroundColor: '#ffe6c1' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', marginTop: 60 }}>
                        <Typography variant='h5' style={{ color: 'black', fontWeight: "bold" }}>Admin Dashboard</Typography>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', marginTop: 5 }}>
                            <Typography variant='h6' style={{ color: 'black' }}>{userData?.data?.fullName}</Typography>
                            <Typography style={{ color: 'black', fontWeight: "bold" }}> ({userData?.data?.role && userData.data.role.toUpperCase()})</Typography>
                        </div>
                    </div>

                    <hr color='orange' />
                    <div>
                        <div>
                            <Button style={{ width: '100%', textAlign: 'left', color: 'black' }}
                                onClick={() => setActiveTabs('users')}
                            >
                                <FaUser style={{ marginRight: 10 }} />
                                Users
                            </Button>
                        </div>
                        <hr color='orange' />
                        <div>
                            <Button style={{ width: '100%', textAlign: 'left', color: 'black' }}
                                onClick={() => setActiveTabs('drivers')}
                            >
                                <FaIdCard style={{ marginRight: 10 }} />
                                Drivers
                            </Button>
                        </div>
                        <hr color='orange' />
                        <div>
                            <Button style={{ width: '100%', textAlign: 'left', color: 'black' }}
                                onClick={() => setActiveTabs('brands')}
                            >
                                <FaCarAlt style={{ marginRight: 10 }} />
                                Brands
                            </Button>
                        </div>
                        <hr color='orange' />
                        <div>
                            <Button style={{ width: '100%', textAlign: 'left', color: 'black' }}
                                onClick={() => setActiveTabs('cabs')}
                            >
                                <FaTaxi style={{ marginRight: 10 }} />
                                Cabs
                            </Button>
                        </div>
                        <hr color='orange' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={9} style={{ backgroundColor: '#eeeeee' }}>
                    <div style={{ marginTop: 80, padding: 20 }}>
                        {renderTabContent()}
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Admin
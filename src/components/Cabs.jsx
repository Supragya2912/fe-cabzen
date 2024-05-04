import React, { useState } from 'react';
import Navbar from '../custom/Navbar';
import book from '../assets/boook.jpg';
import { Paper, Typography, TextField, Button, Slider } from '@mui/material';

const Cabs = () => {
    const [startPoint, setStartPoint] = useState('');
    const [destination, setDestination] = useState('');
    const [price, setPrice] = useState(0);
    const [cabCount, setCabCount] = useState(1);

    const handleSliderChange = (event, newValue) => {
        setCabCount(newValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to handle form submission (e.g., confirm booking)
        console.log("Start Point:", startPoint);
        console.log("Destination:", destination);
        console.log("Price:", price);
        console.log("Number of Cabs:", cabCount);
        // Add your logic to confirm booking here
    };

    return (
        <>
            <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
                <Navbar />
            </div>
            <div className="container" style={{ position: 'relative' }}>
                <div className="row">
                    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                        <img src={book} alt="book" style={{ width: '100%', height: '100%', filter: 'blur(2px)' }} />
                        <Paper elevation={3} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: 20, width: 500 }}>
                            <Typography variant="h6" component="h1" gutterBottom>
                                Book a Cab
                            </Typography>
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Start Point"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={startPoint}
                                    onChange={(e) => setStartPoint(e.target.value)}
                                />
                                <TextField
                                    label="Destination"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                              
                                
                                <TextField
                                    label="Price"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <Button type="submit" variant="contained" color="primary">
                                    Confirm Booking
                                </Button>
                            </form>
                        </Paper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cabs;

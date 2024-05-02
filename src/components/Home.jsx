import React, { useCallback, useEffect } from 'react';
import Navbar from '../custom/Navbar';
import { Grid, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img from '../assets/cab.jpg'
import img2 from '../assets/cab2.jpg'
import img3 from '../assets/cab3.jpg'
import background from '../assets/background.jpg'
import intro from '../assets/intro.jpg'
import book from '../assets/book.jpg'
import imgnew from '../assets/imgnew.jpg'
import chooseus from '../assets/chooseus.jpg'
import { FaHeadset, FaCar, FaUser, FaCarAlt, FaClipboardCheck } from 'react-icons/fa';
import { IconButton, Card, CardContent } from '@mui/material';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import  { userSuccess } from '../redux/reducers/user';


let BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

const Home = () => {

  const dispatch = useDispatch();

  const getUserProfile = useCallback(async() => {

    const token = localStorage.getItem('token');
    console.log(token);

    fetch(`${BASE_URL}/cabzen/auth/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
  
        dispatch(userSuccess(data));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },[dispatch]);

  useEffect(() => {
    getUserProfile();
  }, [getUserProfile]);




  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, overflowY: 'auto' }}>
        <Navbar />
      </div>

      <div style={{ backgroundColor: 'white', overflow: 'auto' }}>
        <Grid container direction="column" style={{ minHeight: 'calc(100vh - 64px)' }}>
          <Grid item style={{ backgroundColor: "black" }}>
            <Carousel
              showArrows={false}
              autoPlay={true}
              showIndicators={false}
              showStatus={false}
              interval={2000} // Decreased interval for faster animation
              showThumbs={false}
              infiniteLoop={true}
            >
              <div>
                <img src={Img} alt="cab1" style={{ height: 600, filter: 'blur(8px)' }} />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(90deg, white 50%, black 50%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'white',
                  fontSize: 80,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  animation: 'slide-in-bottom 0.5s ease-out forwards' // Decreased animation duration
                }}>Book a ride with us today</div>
              </div>
              <div>
                <img src={img2} alt="cab2" style={{ height: 600, filter: 'blur(8px)' }} />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(90deg, orange 50%, black 50%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'white',
                  fontSize: 80,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  animation: 'slide-in-bottom 0.5s ease-out forwards' // Decreased animation duration
                }}>Fast and reliable transportation</div>
              </div>
              <div>
                <img src={img3} alt="cab3" style={{ height: 600, filter: 'blur(8px)' }} />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(90deg, #D5C406 50%, white 50%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'white',
                  fontSize: 80,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  animation: 'slide-in-bottom 0.5s ease-out forwards'
                }}>Affordable rates for your travels</div>
              </div>
            </Carousel>
          </Grid>
          <Grid item style={{ backgroundColor: '#fff7b0' }}>
            <div style={{ position: 'relative', width: '100%' }}>

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                <Typography variant="h4" style={{ fontWeight: 'bold', color: '#36454F', marginTop: 15 }}>Welcome to Cabzen</Typography>
                <Typography variant='h6' style={{ color: 'orange', fontWeight: 'bold' }}>Our services</Typography>
              </div>
              <Grid container style={{ padding: 40 }} justifyContent={"center"}>
                <Grid item xs={12} sm={3} style={{ backgroundColor: 'black', color: 'white', padding: 10, borderRadius: 10, marginRight: 10 }}>
                  <img src={intro} alt="intro" style={{ width: '100%', height: 400, borderRadius: 10 }} />
                  <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: 10 }}>Fast and reliable transportation</Typography>
                  <Typography variant="body1" style={{ marginTop: 10 }}>We provide fast and reliable transportation services to our customers. Our drivers are well-trained and experienced to ensure that you reach your destination safely and on time.</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ backgroundColor: 'black', color: 'white', padding: 10, borderRadius: 10, marginRight: 10 }}>
                  <img src={book} alt="book" style={{ width: '100%', height: 400, borderRadius: 10 }} />
                  <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: 10 }}>Affordable rates for your travels</Typography>
                  <Typography variant="body1" style={{ marginTop: 10 }}>We offer affordable rates for all our services. Whether you need a ride to the airport, a trip around town, or a long-distance journey, we have the perfect solution for you.</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ backgroundColor: 'black', color: 'white', padding: 10, borderRadius: 10 }}>
                  <img src={imgnew} alt="book" style={{ width: '100%', height: 400, borderRadius: 10 }} />
                  <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: 10 }}>Professional drivers at your service</Typography>
                  <Typography variant="body1" style={{ marginTop: 10 }}>Our team of professional drivers is dedicated to providing you with a safe and comfortable journey. With years of experience and rigorous training, our drivers ensure that you receive top-notch service every time you travel with us.</Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: 20 }} >
            <div>
              <Typography variant="h4" style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Why choose us</Typography>
              <Typography variant="h6" style={{ color: 'orange', textAlign: 'center', fontWeight: 'bold' }}>We Make Sure That Your Every
                Trip Is Comfortable</Typography>
              <Grid container style={{ marginTop: 30 }}>
                <Grid item xs={12} sm={6}>
                  <img src={chooseus} alt="chooseus" style={{ width: '90%', height: 500, borderRadius: 10, marginRight: 10 }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container style={{ padding: 20 }} spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <Card style={{ color: 'black', borderRadius: 10, border: "5px solid #ffc570", height: '100%' }}>
                        <CardContent style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: 'center' }}>
                          <FaHeadset size={40} color='#A59306' />
                          <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>24/7 customer support</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Card style={{ color: 'black', borderRadius: 10, border: "5px solid #ffc570", height: '100%' }}>
                        <CardContent style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: 'center' }}>
                          <FaCar size={40} color='#A59306' />
                          <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>Safe and comfortable rides</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Card style={{ color: 'black', borderRadius: 10, border: "5px solid #ffc570", height: '100%' }}>
                        <CardContent style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: 'center' }}>
                          <FaRupeeSign size={40} color='#A59306' />
                          <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>Affordable rates</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Card style={{ color: 'black', borderRadius: 10, border: "5px solid #ffc570", height: '100%' }}>
                        <CardContent style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: 'center' }}>
                          <FaUser size={40} color='#A59306' />
                          <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>Professional drivers</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Card style={{ color: 'black', borderRadius: 10, border: "5px solid #ffc570", height: '100%' }}>
                        <CardContent style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: 'center' }}>
                          <FaCarAlt size={40} color='#A59306' />
                          <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>Clean and well-maintained vehicles</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Card style={{ color: 'black', borderRadius: 10, border: "5px solid #ffc570", height: '100%' }}>
                        <CardContent style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: 'center' }}>
                          <FaClipboardCheck size={40} color='#A59306' />
                          <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>Easy booking process</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item >
            <Grid container style={{ backgroundColor: 'black', color: 'white', padding: '40px 20px', marginTop: 'auto' }}>
              <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
                <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: 20 }}>Connect with us</Typography>
                <div>
                  <IconButton style={{ color: 'white' }}>
                    <FaFacebook />
                  </IconButton>
                  <IconButton style={{ color: 'white' }}>
                    <FaTwitter />
                  </IconButton>
                  <IconButton style={{ color: 'white' }}>
                    <FaInstagram />
                  </IconButton>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
                <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: 20 }}>Contact Information</Typography>
                <Typography variant="body1">123 Main Street, City Name</Typography>
                <Typography variant="body1">Email: info@cabzen.com</Typography>
                <Typography variant="body1">Phone: +123 456 7890</Typography>
              </Grid>
              <Grid item xs={12} style={{ marginTop: 20 }}>
                <Typography variant="body2" align="center">&copy; 2024 Cabzen. All rights reserved.</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

    </>
  )
}

export default Home;

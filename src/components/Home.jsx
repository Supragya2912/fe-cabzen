import React from 'react';
import Navbar from '../custom/Navbar';
import { Grid, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img from '../assets/cab.jpg'
import img2 from '../assets/cab2.jpg'
import img3 from '../assets/cab3.jpg'

const Home = () => {
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
                  background: 'linear-gradient(90deg, #C1B009 50%, white 50%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'white',
                  fontSize: 80,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  animation: 'slide-in-bottom 0.5s ease-out forwards' // Decreased animation duration
                }}>Affordable rates for your travels</div>
              </div>
            </Carousel>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Home;

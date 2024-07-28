import React, { useRef, useEffect } from 'react';
import Carosell from './Carosell';
import Below from './Below';
import HomePage from './Homepage';
import Navbar from '../Navbar/Navbar';
import Rooter from '../Navbar/Rooter';

const Home = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.controls = false; 
    }
  }, []);

  return (
    <>
      <Navbar/>
      <HomePage/>
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <video 
          ref={videoRef} 
          src={src} 
          autoPlay 
          muted 
          loop 
          style={{ width: '100%', height: '100%', pointerEvents: 'none' }} 
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
          <h1 style={{ fontSize: '70px', fontWeight: 'bold' }}>UP TO 60% OFF</h1>
          <h1 style={{ color: 'yellow', fontWeight: 'bold', fontSize: '40px' }}>Shirts from $44.75</h1>
          <div style={{ display: 'flex', textAlign: 'center' }}>
            <button style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px', cursor: 'pointer', backgroundColor: 'white', color: 'black', marginLeft: '50px', borderRadius: '10px' }}>SHOP SALE SHIRTS</button>
            <button style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px', cursor: 'pointer', backgroundColor: 'white', color: 'black', marginLeft: '50px', borderRadius: '10px' }}>SHOP ALL SALE</button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '5px' }}>
        <Carosell />
        <Below />
        <Rooter />
      </div>   
    </>
  );
};

export default Home;

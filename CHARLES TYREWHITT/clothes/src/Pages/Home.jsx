
import React, { useRef, useEffect } from 'react';
import Carosell from './Carosell';
import Below from './Below';
import HomePage from './Homepage';
import Navbar from '../navbar/Navbar';
import Rooter from '../navbar/Rooter';

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
      <Navbar />
      <HomePage />
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <video 
          ref={videoRef} 
          src={src} 
          autoPlay 
          muted 
          loop 
          style={{ width: '100%', height: '100%', pointerEvents: 'none', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
          <h1 style={{ fontSize: '7vw', fontWeight: 'bold', margin: '0' }}>UP TO 60% OFF</h1>
          <h2 style={{ color: 'yellow', fontWeight: 'bold', fontSize: '4vw', margin: '0' }}>Shirts from $44.75</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <button style={{ padding: '10px 20px', fontSize: '1vw', margin: '10px 0', cursor: 'pointer', backgroundColor: 'white', color: 'black', borderRadius: '10px' }}>SHOP SALE SHIRTS</button>
            <button style={{ padding: '10px 20px', fontSize: '1vw', margin: '10px 0', cursor: 'pointer', backgroundColor: 'white', color: 'black', borderRadius: '10px' }}>SHOP ALL SALE</button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '5px' }}>
        <Carosell />
        <Below />
        <Rooter />
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            h1 {
              font-size: 50px;
            }
            h2 {
              font-size: 30px;
            }
            button {
              font-size: 14px;
              padding: 8px 16px;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 40px;
            }
            h2 {
              font-size: 24px;
            }
            button {
              font-size: 12px;
              padding: 6px 12px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;

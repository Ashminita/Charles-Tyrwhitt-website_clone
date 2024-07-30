
import React from 'react';
import { Link } from 'react-router-dom';
import './Carosell.css';

const Carosell = () => {
  return (
    <div className='carousel-container'>
      <div className='card'>
        <a href="#"><img src="/Images/hc-044.jpg" alt="Linen Shirts"/></a>
        <div className='card-body'>
          <h2>LINEN SHIRTS</h2>
          <p>BUY 2, SAVE $40</p>
        </div>
      </div>
      <div className='card'>
        <Link to='/pant'><img src="/Images/hc-045.jpg" alt="Shorts & Pants"/></Link>
        <div className='card-body'>
          <h2>SHORTS & PANTS</h2>
          <p>4 FOR $259, SAVE $255</p>
        </div>
      </div>
      <div className='card'>
        <a href="#"><img src="/Images/hc-053.jpg" alt="Polos"/></a>
        <div className='card-body'>
          <h2>POLOS</h2>
          <p>4 FOR $259, SAVE $255</p>
        </div>
      </div>
      <div className='card'>
        <Link to='/suit'><img src="/Images/hc-056.jpg" alt="Suits"/></Link>
        <div className='card-body'>
          <h2>SUITS</h2>
          <p>THE BEST (DRESSED) MAN</p>
        </div>
      </div>
      <div className='card'>
        <Link to='/blazer'><img src="/Images/hc-064.jpg" alt="Blazers"/></Link>
        <div className='card-body'>
          <h2>BLAZERS</h2>
          <p>AT A STRETCH</p>
        </div>
      </div>
      <div className='card'>
        <Link to='/shirt'><img src="/Images/hc-070.jpg" alt="Dress Shirts"/></Link>
        <div className='card-body'>
          <h2>DRESS SHIRTS</h2>
          <p>4 FOR $259, SAVE $255</p>
        </div>
      </div>
    </div>
  );
};

export default Carosell;

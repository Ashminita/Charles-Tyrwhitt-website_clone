import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carosell.css'; 
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

const Carosell = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='container'>
      <Slider {...settings}>
        <div className='card'>
          <a><img src="/Images/hc-044.jpg" alt=""/></a>
          <div className='card-body'>
            <h2>LINEN SHIRTS</h2>
            <p>BUY 2, SAVE $40</p>
          </div>
        </div>
        <div className='card'>
          <Link to={'/pant'}><img src="/Images/hc-045.jpg" alt=""/></Link>
          <div className='card-body'>
            <h2>SHORTS & PANTS</h2>
            <p>4 FOR $259, SAVE $255</p>
          </div>
        </div>
        <div className='card'>
          <a><img src="/Images/hc-053.jpg" alt=""/></a>
          <div className='card-body'>
            <h2>POLOS</h2>
            <p>4 FOR $259, SAVE $255</p>
          </div>
        </div>
        <div className='card'>
          <Link to={'/suit'}><img src="/Images/hc-056.jpg" alt=""/></Link>
          <div className='card-body'>
            <h2>SUITS</h2>
            <p>PERFECT BLEND</p>
          </div>
        </div>
        <div className='card'>
          <a><img src="/Images/hc-064.jpg" alt=""/></a>
          <div className='card-body'>
            <h2>BLAZERS</h2>
            <p>SPREZZATURA STYLE</p>
          </div>
        </div>
        <div className='card'>
          <Link to={'/shirt'}><img src="/Images/hc-070.jpg" alt=""/></Link>
          <div className='card-body'>
            <h2>DRESS SHIRTS</h2>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carosell;

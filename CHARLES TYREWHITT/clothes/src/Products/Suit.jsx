
import React, { useEffect, useState ,useRef} from 'react';
import { Link } from 'react-router-dom';
import './Suit.css';
import Navbar from '../navbar/Navbar'
import Rooter from '../navbar/Rooter'

function Suit() {
  const [products, setProducts] = useState([]);

  async function getData()
  {
    let res= await fetch('http://localhost:3000/suit');
    let fetchedData=await res.json();
    setProducts(fetchedData);
  }
  useEffect(()=>{getData();},[]);

  const buttonCarouselRef = useRef(null);

  const scrollLeft = () => {
    buttonCarouselRef.current.scrollLeft -= 200; 
  };

  const scrollRight = () => {
    buttonCarouselRef.current.scrollLeft += 200; 
  };


  return (
    <>
      <Navbar/>
      <div className="App">
      <h1 id="a1">MEN'S SUITS</h1>
      <div className="intro">
        <p>
          Our suits are all about expert tailoring.We have smart and comfortable bisiness suits for men,crafted from wool.
          Browse understand plain options or embrace bold style with standout checks.
          For special occasions, classic morning suits that combine tail coats with flat fronted pants will have you looking the
          part. Unsure of your fit ? Book an in-store appointment and get one-on -one styling and fiting.
          <div className="carousel-container">
          <button className="scroll-button left" onClick={scrollLeft}>{'<'}</button>
          <div className="b1" ref={buttonCarouselRef}>
            <button>TUXEDOS</button>
            <button>SLIM FIT SUITS</button>
            <button>CLASSIC FIT SUITS</button>
            <button>BUSINESS SUITS</button>
            <button>SLIM FIT SHIRTS</button>
            <button>CLASSIC FIT SUITS</button>
            <button>BUSINESS SUITS</button>
            <button>MORNING SUITS</button>
            <button>NAVY SUITS</button>
            <button>BLACK SUITS</button>
            <button>GREY SUITS</button>
          </div>
          <button className="scroll-button right" onClick={scrollRight}>{'>'}</button>
        </div>
        
        </p>
        <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw22c3a2d2/merchAssets/SS24/TIBs/ss24-tib-053.jpg" alt="Men's Suits"/>
      </div>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
           <Link to={`/product/${product.id}`}><img src={product.img} alt={product.title} /></Link>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
    <Rooter/>
    </>
    
  );
}

export default Suit;





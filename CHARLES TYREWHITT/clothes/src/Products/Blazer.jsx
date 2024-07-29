import React, { useEffect, useState ,useRef} from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import Navbar from '../navbar/Navbar'
import Rooter from '../navbar/Rooter'

function Blazer() {
  const [products, setProducts] = useState([]);

  async function getData()
  {
    let res= await fetch('http://localhost:3000/blazer');
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
      <h1 id="a1">MEN'S BLAZERS</h1>
      <div className="intro">
        <p>
          Add a blazer, and any outfit's transformed.Impeccable cuts,fine fabrics,
          and elevated details like working cuffs make our men's blazers a superb choice
          for your business-casual looks.Team your wool, linen, or cotton-blend men's jacket with a pair of Chinos,
          and you've got effortless off-duty style covered.
          <div className="carousel-container">
          <button className="scroll-button left" onClick={scrollLeft}>{'<'}</button>
          <div className="b1" ref={buttonCarouselRef}>
            <button>CLASSIC FIT</button>
            <button>SLIM FIT</button>
            <button>LINEN JACKETS</button>
            <button>SUIT JACKETS</button>
            <button>WOOL JACKETS</button>
            <button>GREY BLAZERS</button>
            <button>BLUE BLAZERS</button>
            <button>BROWN BLAZERS</button>
            <button>GREEN BLAZERS</button>
          </div>
          <button className="scroll-button right" onClick={scrollRight}>{'>'}</button>
        </div>
        
        </p>
        <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwf99cb73c/merchAssets/AW24/TIBs/tib-aw24-008.jpg" alt="Men's Blazers"/>
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

export default Blazer;





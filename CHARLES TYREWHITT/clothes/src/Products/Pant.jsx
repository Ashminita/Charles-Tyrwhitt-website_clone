import React, { useEffect, useState ,useRef} from 'react';
import { Link } from 'react-router-dom';
import './Pant.css';
import Navbar from '../navbar/Navbar'
import Rooter from '../navbar/Rooter'

function Pant() {
  const [products, setProducts] = useState([]);

  async function getData()
  {
    let res= await fetch('http://localhost:3000/pant');
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
      <h1 id="a1">MEN'S PANTS</h1>
      <div className="intro">
        <p>
          Comfortable fabrics and flattering fits ? Expect bot from our from our formal and casual men's pants.
          Our chinos are bestsellers for good reason - they feature non-iron finishes,super-soft textures,and slight stretch for comfort.
          To complete business looks, choose 5-pocket men's jeans in versatile shades of charcoal,navy and oatmeal.
          <div className="carousel-container">
          <button className="scroll-button left" onClick={scrollLeft}>{'<'}</button>
          <div className="b1" ref={buttonCarouselRef}>
            <button>CHINOS</button>
            <button>SHORTS</button>
            <button>5 POCKET JEANS</button>
            <button>SUIT PANTS</button>
            <button>BLACK PANTS</button>
            <button>BLUE PANTS</button>
          </div>
          <button className="scroll-button right" onClick={scrollRight}>{'>'}</button>
        </div>
        
        </p>
        <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw85cf41c8/merchAssets/SS24/TIBs/ss24-tib-038.jpg" alt="Men's Pants"/>
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

export default Pant;






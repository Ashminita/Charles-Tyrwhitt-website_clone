import React, { useEffect, useState ,useRef} from 'react';
import { Link } from 'react-router-dom';
import './Shirt.css';

function Shirt() {
  const [products, setProducts] = useState([]);

  async function getData()
  {
    let res= await fetch('http://localhost:3000/shirt');
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
    <div className="App">
      <h1 id="a1">MEN'S DRESS & FORMAL SHIRTS</h1>
      <div className="intro">
        <p>
          Discover classic colorways and contemporary patterns in our collection of dress shirts.
          Exceptional fabrics and expertly tailored fits are on hand to complement your favorite Suits.
          Our non-iron dress shirts ensure you stay crease-free, while our innovative Tyrwhitt Cool finish
          means you feel fresh, even on high-pressure days.
          <div className="carousel-container">
          <button className="scroll-button left" onClick={scrollLeft}>{'<'}</button>
          <div className="b1" ref={buttonCarouselRef}>
            <button>WHITE SHIRTS</button>
            <button>NON-IRON SHIRTS</button>
            <button>TWILL SHIRTS</button>
            <button>EGYPTIAN COTTON SHIRTS</button>
            <button>SLIM FIT SHIRTS</button>
            <button>CHECK SHIRTS</button>
            <button>STRIPE SHIRTS</button>
            <button>BENGAL STRIPE SHIRTS</button>
            <button>CASUAL SHIRTS</button>
          </div>
          <button className="scroll-button right" onClick={scrollRight}>{'>'}</button>
        </div>
        
        </p>
        <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw723bbab0/merchAssets/SS24/TIBs/ss24-tib-042.jpg" alt="Men's Shirts"/>
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
  );
}

export default Shirt;





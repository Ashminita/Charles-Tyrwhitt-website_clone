import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Suit.css';

function Suit() {
  const [products, setProducts] = useState([]);

  async function getData()
  {
    let res= await fetch('http://localhost:3000/suit');
    let fetchedData=await res.json();
    setProducts(fetchedData);
  }
  useEffect(()=>{getData();},[]);

  return (
    <div className="App">
      <h1 id='a1'>MEN'S SUITS</h1>
      <div className="intro">
        <div>
          <p>Our suits are all about expert tailoring. We have smart and comfortable business suits for men, crafted from soft wool. Browse understated plain options or embrace bold style with standout checks. For special occasions, classic morning suits that combine tail coats with flat-fronted pants will have you looking the part. Unsure of your fit? Book an in-store appointment and get one-on-one styling and fitting.</p>
        </div>
        <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw22c3a2d2/merchAssets/SS24/TIBs/ss24-tib-053.jpg" alt="Men's Suits"/>
      </div>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}><img src={product.img} alt={product.title} /></Link>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suit;




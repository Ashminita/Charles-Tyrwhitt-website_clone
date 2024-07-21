// src/App.js
import React, { useEffect, useState } from 'react';
import './Suit.css';

function Shirt() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/shirt')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1 id='a1'>MEN'S DRESS & FORMAL SHIRTS</h1>
      <div className="intro">
        <div>
          <p>Discover classic colorways and contemporary patterns in our collection of dress shirts. Exceptional fabrics and expertly tailored fits are on hand to complement your favorite Suits. Our non-iron dress shirts ensure you stay crease-free, while our innovative Tyrwhitt Cool finish means you feel fresh, even on high-pressure days.</p>
        </div>
        <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw723bbab0/merchAssets/SS24/TIBs/ss24-tib-042.jpg" alt="Men's Shirts"/>
      </div>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shirt;

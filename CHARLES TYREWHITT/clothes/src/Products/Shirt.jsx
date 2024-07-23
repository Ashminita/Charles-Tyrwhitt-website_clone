import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Suit.css';

function Shirt() {
  const [products, setProducts] = useState([]);

  async function getData()
  {
    let res= await fetch('http://localhost:3000/shirt');
    let fetchedData=await res.json();
    setProducts(fetchedData);
  }
  useEffect(()=>{getData();},[]);


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

export default Shirt;





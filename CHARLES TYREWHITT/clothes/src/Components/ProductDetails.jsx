import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetalils.css'; 

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  async function getData()
  {
    let res= await fetch(`http://localhost:3000/product/${id}`);
    let fetchedData=await res.json();
    setProduct(fetchedData);
  }
  useEffect(()=>{getData();},[id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img src={product.img} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
     
    </div>
  );
}

export default ProductDetails;



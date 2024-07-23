

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetalils.css'; 

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  async function getData() {
    let res = await fetch(`http://localhost:3000/product/${id}`);
    let fetchedData = await res.json();
    setProduct(fetchedData);
  }

  useEffect(() => {
    getData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <div className="image-section">
        <img src={product.img} alt={product.title} />
        <div className="thumbnails">
          <img src={product.img} alt={`${product.title} thumbnail`} />
          <img src={product.img} alt={`${product.title} thumbnail`} />
          <img src={product.img} alt={`${product.title} thumbnail`} />
          <img src={product.img} alt={`${product.title} thumbnail`} />
        </div>
      </div>
      <div className="details-section">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p className="price">Price: ${product.price}</p>
        <div className="size-selection">
          <h2> Size (Inch)</h2>
          <div className="sizes">
            <h3>Short</h3>
            <div className="size-buttons">
              <button>36S</button>
              <button>38S</button>
              <button>40S</button>
              <button>42S</button>
              <button>44S</button>
            </div>
            <h3>Regular</h3>
            <div className="size-buttons">
              <button>36R</button>
              <button>38R</button>
              <button>40R</button>
              <button>42R</button>
              <button>44R</button>
              <button>46R</button>
              <button>48R</button>
              <button>50R</button>
            </div>
            <h3>Long</h3>
            <div className="size-buttons">
              <button>40L</button>
              <button>42L</button>
              <button>44L</button>
              <button>46L</button>
              <button>48L</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

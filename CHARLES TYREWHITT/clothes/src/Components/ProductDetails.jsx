import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetalils.css';
import Navbar from '../navbar/Navbar';
import Rooter from '../navbar/Rooter';
import HomePage from '../Pages/Homepage';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => console.error('Error fetching product data:', error));
  }, [id]);

  const addToCart = async () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const cartItem = {
      ...product,
      size: selectedSize,
      quantity: 1
    };

    await fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItem)
    });

    navigate('/cart');
  };

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <HomePage/>
      <div className="product-details">
        <div className="image-section">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="details-section">
          <h1>{product.title}</h1>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>


          <div className="size-options">
            <h2 style={{fontWeight:'bold'}}>SIZE</h2>
            <div className="size-buttons">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((size, index) => (
                <button
                  key={index}
                  className={selectedSize === size ? "selected" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="add-to-cart-button" onClick={addToCart}>Add to Bag</button>
        </div>
      </div>
      <Rooter />
    </>
  );
}

export default ProductDetails;
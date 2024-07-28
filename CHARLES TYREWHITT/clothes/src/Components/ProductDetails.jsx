import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetalils.css';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [showSizeOptions, setShowSizeOptions] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        if (data.colors && data.colors.length > 0) {
          setSelectedColor(data.colors[0]); 
        }
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
      color: selectedColor,
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
    <div className="product-details">
      <div className="image-section">
        <img src={product.img} alt={product.title} />
        
      </div>
      <div className="details-section">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p className="price">Price: ${product.price}</p>

        <div className="color-options">
          <h4>Color</h4>
          {product.colors && product.colors.map((color, index) => (
            <button
              key={index}
              className={selectedColor === color ? "selected" : ""}
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </button>
          ))}
        </div>

        <div className="size-options">
          <h4>Size</h4>
          <button onClick={() => setShowSizeOptions(!showSizeOptions)}>
            {selectedSize || "Select Size"}
          </button>
          {showSizeOptions && (
            <div className="size-dropdown">
              {['Small', 'Medium', 'Large'].map((size, index) => (
                <button
                  key={index}
                  className={selectedSize === size ? "selected" : ""}
                  onClick={() => {
                    setSelectedSize(size);
                    setShowSizeOptions(false);
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>

        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
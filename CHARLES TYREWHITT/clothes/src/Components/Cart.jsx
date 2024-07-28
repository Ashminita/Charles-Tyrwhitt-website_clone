import React, { useEffect, useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cart')
      .then(response => response.json())
      .then(data => setCartItems(data));
  }, []);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? <p>No items in cart.</p> : (
        cartItems.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>Color: {item.color}</p>
            <p>Size: {item.size}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
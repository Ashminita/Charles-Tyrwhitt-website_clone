import React, { useState, useEffect } from 'react';
import './Bag.css';

function Bag() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cart')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error fetching cart data:', error));
  }, []);

  return (
    <div className="bag">
      <h2>Bag</h2>
      {cartItems.length === 0 ? (
        <p>There are no items in your bag</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price} - {item.color} - {item.size}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Bag;

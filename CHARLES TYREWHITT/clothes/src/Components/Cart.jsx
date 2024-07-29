import React, { useEffect, useState } from 'react';
import './Cart.css';
import Footer from '../navbar/Rooter';
import Navbar from '../navbar/Navbar';
import HomePage from '../Pages/Homepage';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cart')
      .then(response => response.json())
      .then(data => setCartItems(data));
  }, []);

  const handleRemove = (id) => {
    fetch(`http://localhost:3000/cart/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setCartItems(cartItems.filter(item => item.id !== id));
    });
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCartItems);

    fetch(`http://localhost:3000/cart/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quantity })
    });
  };

  return (
    <div className="cart-container">
       <Navbar />
       <HomePage />
      <h1 className="cart-title">BAG</h1>
      {cartItems.length === 0 ? (
        <p className="cart-empty">No items in cart.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2 className="cart-item-title">{item.title}</h2>
                  <p className="cart-item-sku">SKU: {item.id}</p>
                  <p className="cart-item-detail">{item.description}</p>
                  <p className="cart-item-size">Size: {item.size}</p>
                  <div className="cart-item-actions">
                    <div className="cart-item-quantity">
                      <label htmlFor={`quantity-${item.id}`}>QUANTITY</label>
                      <input
                        type="number"
                        id={`quantity-${item.id}`}
                        value={item.quantity}
                        min="1"
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      />
                    </div>
                    <p className="cart-item-price">${item.price * item.quantity}</p>
                    <button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="summary-offer">
              <h2>OFFER CODE</h2>
              <input type="text" placeholder="Have an offer code?" />
            </div>
            <div className="summary-total-cost">
              <h2>TOTAL</h2>
              <div className="summary-total">
                <p>BAG TOTAL</p>
                <p>${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</p>
              </div>
              <div className="summary-shipping">
                <p>PREMIUM TRACKED SHIPPING</p>
                <p>$17.95</p>
              </div>
              <div className="summary-pay">
                <p>TO PAY</p>
                <p>${(cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) + 17.95).toFixed(2)}</p>
              </div>
              <button className="checkout-button">SECURE CHECKOUT</button>
              <button className="paypal-button">Pay with PayPal</button>
              <div className="payment-methods">
                <img src="/assets/visa.png" alt="Visa" />
                <img src="/assets/mastercard.png" alt="MasterCard" />
                <img src="/assets/paypal.png" alt="PayPal" />
                <img src="/assets/googlePay.png" alt="Google Pay" />
                <img src="/assets/applePay.png" alt="Apple Pay" />
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Cart;

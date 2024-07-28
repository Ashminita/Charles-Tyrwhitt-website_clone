import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Logging in with', email, password);
  };

  const handleCreateAccount = () => {
    navigate('/create-account'); // Redirect to Create Account page
  };

  return (
    <div className="login-container">
      <div className="login-section">
        <h1>My account</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Log in</button>
          <a href="/forgot-password" className="forgot-password">Forgotten your password?</a>
        </form>
      </div>
      <div className="new-customer-section">
        <h2>New customers</h2>
        <p>Set up an account with us and you will be able to:</p>
        <ul>
          <li>Check order status</li>
          <li>Save multiple addresses to your address book</li>
          <li>Set your size and monogramming preferences</li>
        </ul>
        <button onClick={handleCreateAccount} className="create-account-button">Create an account now</button>
      </div>
    </div>
  );
}

export default LoginPage;

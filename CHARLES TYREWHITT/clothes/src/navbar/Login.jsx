
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
<<<<<<< HEAD
import axios from 'axios'; 
=======
import axios from 'axios'; // Import axios for making HTTP requests
>>>>>>> 27415a8b6943932376f0e10aa7ac1d6499df8331
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
<<<<<<< HEAD
      
      const response = await axios.post('http://localhost:5000/login', { email, password });
      
     
      if (response.data.success) {
        setMessage('Login successful!');
        setTimeout(() => {
          navigate('/'); 
        }, 2000); 
=======
      // Send a request to your JSON server to validate the credentials
      const response = await axios.post('http://localhost:5000/login', { email, password });
      
      // Check if login was successful
      if (response.data.success) {
        setMessage('Login successful!');
        setTimeout(() => {
          navigate('/'); // Redirect to homepage
        }, 2000); // Display message for 2 seconds
>>>>>>> 27415a8b6943932376f0e10aa7ac1d6499df8331
      } else {
        setMessage('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('There was an error during login:', error);
      setMessage('There was an error during login. Please try again.');
    }
  };

  const handleCreateAccount = () => {
    navigate('/create-account'); 
  };

  return (
    <div className="login-container">
      <div className="login-section">
        <h1>My account</h1>
        {message && <p className="login-message">{message}</p>}
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

export default Login;
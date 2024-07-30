
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './CreateAccount.css';

function CreateAccountPage() {
  const [formValues, setFormValues] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    subscribe: false,
    unsubscribe: false,
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with values:', formValues);

    try {
      
      const response = await axios.post('http://localhost:3000/users', formValues);
      console.log('Response from server:', response);
      setMessage('Account created');
      setTimeout(() => {
        setMessage('');
        navigate('/'); 
      }, 3000); 
    } catch (error) {
      console.error('There was an error creating the account!', error);
      if (error.response) {
        console.error('Error response data:', error.response.data); 
      }
      setMessage('Error creating account'); 
      setTimeout(() => setMessage(''), 3000); 
    }
  };

  return (
    <div className="create-account-page">
      <div className="form-container">
        <h2>Create Account</h2>
        {message && <p className="popup-message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <select name="title" value={formValues.title} onChange={handleChange} required>
              <option value="">Choose a title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
            </select>
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" value={formValues.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" value={formValues.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" value={formValues.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formValues.password} onChange={handleChange} required />
            <p className="password-hint">
              Your password must be at least 8 characters in length, and contain at least: 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character.
            </p>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" value={formValues.phone} onChange={handleChange} />
          </div>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" name="subscribe" checked={formValues.subscribe} onChange={handleChange} />
              Receive emails about offers and new ranges.
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="unsubscribe" checked={formValues.unsubscribe} onChange={handleChange} />
              Opt-out of mail from selected companies.
            </label>
            <p>By creating an account, you confirm that you have read and accept our Terms and Conditions and Privacy Policy.</p>
          </div>
          <button type="submit" className="submit-button">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountPage;
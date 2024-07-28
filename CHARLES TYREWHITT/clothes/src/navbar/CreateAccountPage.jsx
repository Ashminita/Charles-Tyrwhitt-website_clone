// src/Components/CreateAccountPage.js
import React, { useState } from 'react';
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
    unsubscribe: false, // Ensure this is part of the state
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formValues);
  };

  return (
    <div className="create-account-page">
      <div className="form-container">
        <h2>Create account</h2>
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
            <label>First name</label>
            <input type="text" name="firstName" value={formValues.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Last name</label>
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
              Your password must be at least 8 characters in length, and contain at least: 1 number, 1 upper case letter, 1 lower case letter, 1 special character.
            </p>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" value={formValues.phone} onChange={handleChange} />
          </div>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" name="subscribe" checked={formValues.subscribe} onChange={handleChange} />
              Emails about offers and our exciting new ranges.
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="unsubscribe" checked={formValues.unsubscribe} onChange={handleChange} />
              If you'd prefer not to receive mail from selected companies, please check this box.
            </label>
            By creating an account with Charles Tyrwhitt, you confirm that you have read and accept our Terms and Conditions and See privacy policy
          </div>
          <button type="submit" className="submit-button">Create an Account</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountPage;

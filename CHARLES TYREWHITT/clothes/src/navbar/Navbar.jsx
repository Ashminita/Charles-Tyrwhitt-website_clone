import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/login" className="navbar-icon">
          <i className="fas fa-location-dot"></i> 
        </Link>
        <Link to="/login" className="navbar-icon">
          <i className="fas fa-user"></i> 
        </Link>
      </div>
      <div className="navbar-center">
        <h1>CHARLES TYRWHITT</h1>
        <span>JERMYN STREET LONDON</span>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="What are you looking for ?" />
        <Link to="/cart" className="navbar-icon"> 
          <i className="fas fa-shopping-cart"></i> 
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

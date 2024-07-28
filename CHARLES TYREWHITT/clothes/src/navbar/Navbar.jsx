import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/login" className="navbar-icon">
          <i className="fas fa-location-dot"></i> {/* Home Icon */}
        </Link>
        <Link to="/login" className="navbar-icon">
          <i className="fas fa-user"></i> {/* User Icon */}
        </Link>
      </div>
      <div className="navbar-center">
        <h1>CHARLES TYRWHITT</h1>
        <span>JERMYN STREET LONDON</span>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="What are you looking for ?" />
        <Link to="/cart" className="navbar-icon"> {/* Link to the cart page */}
          <i className="fas fa-shopping-cart"></i> {/* Shopping Cart Icon */}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

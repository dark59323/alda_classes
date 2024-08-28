// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Asegúrate de que la ruta sea correcta
import '../styles/Navbar.css';
import logo from '../recursos/logo.jpg'; // Asegúrate de colocar el logo en esta ruta

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
        <span className="brand-name">ALDA</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        {isAuthenticated ? (
          <li><button onClick={logout} className="navbar-button">Logout</button></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

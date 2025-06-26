import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Navbar({cartItems}) {
  return (
    <nav className="navbar fixed-navbar">
      <div className="logo">Beige</div>
      <Link to="/">Home</Link>
      <Link to="/category/Dorm">Dorm</Link>
      <Link to="/category/Electronics">Electronics</Link>
      <Link to="/category/Study">Study</Link>
      <Link to="/category/Clothes">Clothes</Link>
      <Link to="/cart">Cart {cartItems.length > 0 && `(${cartItems.length})`}</Link>
    </nav>
  );
}
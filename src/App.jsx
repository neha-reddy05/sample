import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import CategoryPage from './components/CategoryPage';
import Login from './pages/login/Login'; // Added Login
import './App.css';
import Signup from './pages/Signup/Signup';

function CategoryRoutes({ addToCart }) {
  const { category } = useParams();
  return <CategoryPage category={category} addToCart={addToCart} />;
}

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/category/:category" element={<CategoryRoutes addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 

      </Routes>
    </>
  );

}




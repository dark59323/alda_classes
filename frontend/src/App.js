// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext'; // Importa AuthProvider
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import Footer from './components/Footer';

const App = () => {
  return (
<<<<<<< HEAD
    <Router> {/* Envuelve toda la aplicación en Router */}
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </AuthProvider>
=======
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
>>>>>>> 8deefac5f89f17d2849e008ffbd17dfe31242ad1
    </Router>
  );
};

export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext'; // Importa AuthProvider
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import Footer from './components/Footer';
import CreateUser from './components/CreateUser'; 

const App = () => {
  return (
    <Router> {/* Envuelve toda la aplicación en Router */}
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/register" element={<CreateUser />} />
        </Routes>
        <Footer /> {/* Asegúrate de incluir el Footer si es necesario */}
      </AuthProvider>
    </Router>
  );
};

export default App;

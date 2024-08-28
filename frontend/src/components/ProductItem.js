// src/components/ProductItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirigir
import { useAuth } from './AuthContext'; // Importa el contexto de autenticación
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
  const { isAuthenticated } = useAuth(); // Obtén el estado de autenticación
  const navigate = useNavigate(); // Obtén la función para redirigir

  const addToCart = () => {
    if (isAuthenticated) {
      console.log(`Adding ${product.name} to cart`);
      // Lógica para agregar al carrito
    } else {
      navigate('/login'); // Redirige al inicio de sesión si no está autenticado
    }
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h2>{product.title}</h2>
      <p>Precio: ${product.price}</p>
      <p>Profesor: {product.teacher_id}</p>
      <p>Descripción: {product.description}</p>
      <button onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductItem;

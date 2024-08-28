// src/components/ProductItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirigir
import { useAuth } from './AuthContext'; // Importa el contexto de autenticación
import axios from 'axios'; // Importa axios para las solicitudes HTTP
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
  const { isAuthenticated, userId } = useAuth(); // Obtén el estado de autenticación y el userId
  const navigate = useNavigate(); // Obtén la función para redirigir

  const addToCart = async () => {
    if (isAuthenticated) {
      try {
        await axios.post('http://localhost:3000/api/cart-items/insert', {
          userId,
          productId: product.id,
          quantity: 1 // Puedes ajustar la cantidad según sea necesario
        });
        console.log(`Added ${product.name} to cart`);
        // Opcional: Redirigir o mostrar un mensaje de éxito
      } catch (error) {
        console.error('Error adding product to cart', error);
      }
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

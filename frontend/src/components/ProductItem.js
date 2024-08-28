// src/components/ProductItem.js
import React from 'react';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
  const addToCart = () => {
    console.log(`Adding ${product.name} to cart`);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h2>{product.title}</h2>
      <p>Precio: ${product.price}</p>
      <p>Profesor: {product.teacher_id}</p>
      <p>Descripcion: {product.description}</p>
      <button onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductItem;
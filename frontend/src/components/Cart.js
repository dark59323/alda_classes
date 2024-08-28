// src/components/Cart.js
import React from 'react';
import '../styles/Cart.css';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 100 },
    // Aquí agregarías productos al carrito
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span> <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default Cart;

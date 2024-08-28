// src/components/Cart.js
import React, { useEffect, useState } from 'react';
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Introducción a las Matemáticas', price: 30.00, quantity: 1 },
    { id: 2, name: 'Desarrollo Web Frontend', price: 50.00, quantity: 2 },
    { id: 3, name: 'JavaScript Avanzado', price: 40.00, quantity: 1 }
  ]);
  const [total, setTotal] = useState(0);
  const [purchaseMessage, setPurchaseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Calcular el total solo con los datos de ejemplo
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalPrice);
  }, [cartItems]);

  const handleRemoveFromCart = (itemId) => {
    // Elimina el ítem del carrito
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);

    // Actualiza el total
    const updatedTotal = updatedCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(updatedTotal);
  };

  const handlePurchase = () => {
    if (cartItems.length === 0) {
      setErrorMessage('No hay productos en el carrito para comprar.');
      setPurchaseMessage('');
    } else {
      setErrorMessage('');
      setPurchaseMessage('Compra exitosa');
    }
  };

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      {purchaseMessage && <p className="purchase-message">{purchaseMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      
      <table className="cart-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="4">Tu carrito está vacío</td>
            </tr>
          ) : (
            cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>
                  <button 
                    onClick={() => handleRemoveFromCart(item.id)} 
                    className="remove-button">
                    &times;
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      
    
      <button className="checkout-button" onClick={handlePurchase}>Comprar</button>
    </div>
  );
};

export default Cart;

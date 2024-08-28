// src/components/Cart.js
import React, { useEffect, useState } from 'react';
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [purchaseMessage, setPurchaseMessage] = useState('');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/cart-items/view'); // Ajusta la URL según sea necesario
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        setCartItems(data);

        // Calcular el total
        const totalPrice = data.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(totalPrice);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (itemId) => {
    try {
      await fetch(`http://localhost:3000/api/cart-items/delete/${itemId}`, {
        method: 'DELETE',
      });
      // Actualiza la lista del carrito después de eliminar el ítem
      setCartItems(cartItems.filter(item => item.id !== itemId));
      // Recalcula el total
      const updatedTotal = cartItems
        .filter(item => item.id !== itemId)
        .reduce((sum, item) => sum + item.price * item.quantity, 0);
      setTotal(updatedTotal);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handlePurchase = () => {
    setPurchaseMessage('Compra exitosa');
    // Opcional: Puedes agregar aquí la lógica para finalizar la compra si es necesario.
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {purchaseMessage && <p className="purchase-message">{purchaseMessage}</p>}
      <ul className="cart-items">
        {cartItems.length === 0 ? (
          <li>Your cart is empty</li>
        ) : (
          cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <span>{item.name}</span> <span>${item.price}</span>
              <button onClick={() => handleRemoveFromCart(item.id)} className="remove-button">Remove</button>
            </li>
          ))
        )}
      </ul>
      <h2>Total: ${total}</h2>
      <button className="checkout-button" onClick={handlePurchase}>Comprar</button>
    </div>
  );
};

export default Cart;

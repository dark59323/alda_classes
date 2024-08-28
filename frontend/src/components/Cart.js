import React, { useEffect, useState } from 'react';
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/cart/view'); // Ajusta la URL según sea necesario
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        setCartItems(data);

        // Calcular el total
        const totalPrice = data.reduce((sum, item) => sum + item.price, 0);
        setTotal(totalPrice);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItems();
  }, []);

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

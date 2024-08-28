// src/components/Cart/CartList.js
import React, { useEffect, useState } from 'react';
import { getCartItems } from '../../api/cartApi';

const CartList = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await getCartItems();
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, []);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;

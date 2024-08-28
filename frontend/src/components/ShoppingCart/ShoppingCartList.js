// src/components/ShoppingCart/ShoppingCartList.js
import React, { useEffect, useState } from 'react';
import { getAllShoppingCarts } from '../../api/shoppingCartApi';

const ShoppingCartList = () => {
  const [shoppingCarts, setShoppingCarts] = useState([]);

  useEffect(() => {
    const fetchShoppingCarts = async () => {
      try {
        const response = await getAllShoppingCarts();
        setShoppingCarts(response.data);
      } catch (error) {
        console.error('Error fetching shopping carts:', error);
      }
    };
    fetchShoppingCarts();
  }, []);

  return (
    <div>
      <h2>Shopping Carts</h2>
      <ul>
        {shoppingCarts.map((cart) => (
          <li key={cart.id}>Cart ID: {cart.id} - Items: {cart.items.length}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCartList;

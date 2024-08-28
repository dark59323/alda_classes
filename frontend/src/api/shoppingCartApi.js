// src/api/shoppingCartApi.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/shopping-carts';

export const getAllShoppingCarts = () => axios.get(`${API_URL}/view`);
export const getShoppingCartById = (id) => axios.get(`${API_URL}/view/${id}`);
export const createShoppingCart = (shoppingCartData) => axios.post(`${API_URL}/insert`, shoppingCartData);
export const updateShoppingCart = (id, shoppingCartData) => axios.put(`${API_URL}/edit/${id}`, shoppingCartData);
export const deleteShoppingCart = (id) => axios.delete(`${API_URL}/delete/${id}`);

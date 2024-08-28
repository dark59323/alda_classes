// src/api/cartApi.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/cart-items';

export const getCartItems = () => axios.get(`${API_URL}/view`);
export const getCartItemById = (id) => axios.get(`${API_URL}/view/${id}`);
export const createCartItem = (cartItemData) => axios.post(`${API_URL}/insert`, cartItemData);
export const updateCartItem = (id, cartItemData) => axios.put(`${API_URL}/edit/${id}`, cartItemData);
export const deleteCartItem = (id) => axios.delete(`${API_URL}/delete/${id}`);

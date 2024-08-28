// src/api/paymentApi.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/payments';

export const getPayments = () => axios.get(`${API_URL}/view`);
export const getPaymentById = (id) => axios.get(`${API_URL}/view/${id}`);
export const createPayment = (paymentData) => axios.post(`${API_URL}/insert`, paymentData);
export const updatePayment = (id, paymentData) => axios.put(`${API_URL}/edit/${id}`, paymentData);
export const deletePayment = (id) => axios.delete(`${API_URL}/delete/${id}`);

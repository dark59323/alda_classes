// src/api/bookingApi.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/bookings';

export const getAllClassBookings = () => axios.get(`${API_URL}/view`);
export const getClassBookingById = (id) => axios.get(`${API_URL}/view/${id}`);
export const createClassBooking = (bookingData) => axios.post(`${API_URL}/insert`, bookingData);
export const updateClassBooking = (id, bookingData) => axios.put(`${API_URL}/edit/${id}`, bookingData);
export const deleteClassBooking = (id) => axios.delete(`${API_URL}/delete/${id}`);

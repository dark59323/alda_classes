// src/api/classApi.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/classes';

export const getClasses = () => axios.get(`${API_URL}/view`);
export const getClassById = (id) => axios.get(`${API_URL}/view/${id}`);
export const createClass = (classData) => axios.post(`${API_URL}/insert`, classData);
export const updateClass = (id, classData) => axios.put(`${API_URL}/edit/${id}`, classData);
export const deleteClass = (id) => axios.delete(`${API_URL}/delete/${id}`);

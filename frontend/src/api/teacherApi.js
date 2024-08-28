// src/api/teacherApi.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/teachers';

export const getAllTeachers = () => axios.get(`${API_URL}/view`);
export const getTeacherById = (id) => axios.get(`${API_URL}/view/${id}`);
export const createTeacher = (teacherData) => axios.post(`${API_URL}/insert`, teacherData);
export const updateTeacher = (id, teacherData) => axios.put(`${API_URL}/edit/${id}`, teacherData);
export const deleteTeacher = (id) => axios.delete(`${API_URL}/delete/${id}`);

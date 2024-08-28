import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia esto por la URL de tu servidor
  timeout: 1000,
});

export default instance;

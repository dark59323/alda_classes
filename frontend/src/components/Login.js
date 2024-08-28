// src/Login.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Asegúrate de tener los estilos necesarios

const Login = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Error al autenticar. Por favor, verifica tus credenciales.');
      }

      const data = await response.json();

      if (data.token) {
        localStorage.setItem('authToken', data.token); // Guarda el token en el almacenamiento local
        login(); // Actualiza el estado de autenticación
        navigate('/'); // Redirige al usuario a la página principal
      } else {
        throw new Error('Credenciales inválidas.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      {!isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Iniciar sesión</button>
          {error && <p className="error">{error}</p>}
        </form>
      ) : (
        <button onClick={logout}>Cerrar sesión</button>
      )}
    </div>
  );
};

export default Login;

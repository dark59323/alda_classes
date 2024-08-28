// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Bienvenido a Alda</h1>
            <p>Selecciona una opción para navegar:</p>
            <ul>
                <li><Link to="/teachers">Profesores</Link></li>
                <li><Link to="/cart-items">Artículos del Carrito</Link></li>
                <li><Link to="/bookings">Reservas</Link></li>
                <li><Link to="/classes">Clases</Link></li>
                <li><Link to="/payments">Pagos</Link></li>
                <li><Link to="/shopping-carts">Carritos</Link></li>
            </ul>
        </div>
    );
};

export default HomePage;

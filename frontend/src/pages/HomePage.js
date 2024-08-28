import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css'; // Asegúrate de que esta ruta sea correcta
import heroImage from '../resources/fotoPrincipal.jpg'; // Actualiza con el nombre de tu imagen

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="navbar">
                <nav>
                    <div className="nav-brand">
                        <h1>Alda</h1>
                    </div>
                    <ul className="nav-list">
                        <li><Link to="/teachers">Profesores</Link></li>
                        <li><Link to="/cart-items">Artículos del Carrito</Link></li>
                        <li><Link to="/bookings">Reservas</Link></li>
                        <li><Link to="/classes">Clases</Link></li>
                        <li><Link to="/payments">Pagos</Link></li>
                        <li><Link to="/shopping-carts">Carritos</Link></li>
                    </ul>
                </nav>
            </header>

            <main className="main-content">
                <section className="hero">
                    <img 
                        src={heroImage}
                        alt="Hero" 
                        className="hero-image" 
                    />
                </section>

                <section className="description">
                    <h2>Acerca de Nuestra Plataforma</h2>
                    <p>Alda Tutoring ofrece una experiencia de aprendizaje en línea única, conectando a estudiantes con tutores expertos.</p>
                </section>
            </main>
        </div>
    );
};

export default HomePage;

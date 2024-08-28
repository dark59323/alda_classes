import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import BookingList from '../components/Booking/BookingList';
import CreateBooking from '../components/Booking/CreateBooking';
import '../styles/BookingPage.css'; // Asegúrate de tener este archivo

const BookingPage = () => {
    const [reload, setReload] = useState(false);

    const handleBookingCreated = () => {
        setReload(!reload);
    };

    return (
        <div className="booking-page">
            <header className="navbar">
                <nav>
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
                <h1>Class Bookings</h1>
                <CreateBooking onBookingCreated={handleBookingCreated} />
                <BookingList key={reload} />
            </main>
        </div>
    );
};

export default BookingPage;

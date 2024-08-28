import React, { useEffect, useState } from 'react';
import '../../styles/BookingList.css'; // Asegúrate de crear este archivo de estilo

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch('/api/class-bookings');
                const data = await response.json();
                setBookings(data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    return (
        <div className="booking-list">
            <h2>Lista de Reservas</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Clase</th>
                        <th>Usuario</th>
                        <th>Fecha Programada</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <tr key={booking.booking_id}>
                            <td>{booking.booking_id}</td>
                            <td>{booking.class_id}</td>
                            <td>{booking.user_id}</td>
                            <td>{new Date(booking.scheduled_at).toLocaleString()}</td>
                            <td>{booking.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingList;

import React, { useState } from 'react';
import '../../styles/CreateBooking.css'; // Asegúrate de tener este archivo

const CreateBooking = ({ onBookingCreated }) => {
    const [classId, setClassId] = useState('');
    const [userId, setUserId] = useState('');
    const [scheduledAt, setScheduledAt] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/class-bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ class_id: classId, user_id: userId, scheduled_at: scheduledAt, status })
            });
            const newBooking = await response.json();
            onBookingCreated(newBooking);
            setClassId('');
            setUserId('');
            setScheduledAt('');
            setStatus('');
        } catch (error) {
            console.error('Error creating booking:', error);
        }
    };

    return (
        <div className="create-booking">
            <h2>Crear Reserva</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Clase ID:</label>
                    <input type="text" value={classId} onChange={(e) => setClassId(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Usuario ID:</label>
                    <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Fecha Programada:</label>
                    <input type="datetime-local" value={scheduledAt} onChange={(e) => setScheduledAt(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Estado:</label>
                    <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
                </div>
                <button type="submit">Crear Reserva</button>
            </form>
        </div>
    );
};

export default CreateBooking;

const client = require('../config/db');

// Obtener todas las reservas
const getAllClassBookings = async () => {
    const res = await client.query('SELECT * FROM class_bookings');
    return res.rows;
};

// Obtener una reserva por ID
const getClassBookingById = async (id) => {
    const res = await client.query('SELECT * FROM class_bookings WHERE booking_id = $1', [id]);
    return res.rows[0];
};

// Crear una nueva reserva
const createClassBooking = async (class_id, user_id, scheduled_at, status) => {
    const res = await client.query(
        'INSERT INTO class_bookings (class_id, user_id, scheduled_at, status) VALUES ($1, $2, $3, $4) RETURNING *',
        [class_id, user_id, scheduled_at, status]
    );
    return res.rows[0];
};

// Actualizar una reserva existente
const updateClassBooking = async (id, class_id, user_id, scheduled_at, status) => {
    const res = await client.query(
        'UPDATE class_bookings SET class_id = $1, user_id = $2, scheduled_at = $3, status = $4 WHERE booking_id = $5 RETURNING *',
        [class_id, user_id, scheduled_at, status, id]
    );
    return res.rows[0];
};

// Eliminar una reserva por ID
const deleteClassBooking = async (id) => {
    const res = await client.query('DELETE FROM class_bookings WHERE booking_id = $1 RETURNING *', [id]);
    return res.rows[0];
};

module.exports = { getAllClassBookings, getClassBookingById, createClassBooking, updateClassBooking, deleteClassBooking };

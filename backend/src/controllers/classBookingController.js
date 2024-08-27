const classBookingModel = require('../models/classBookingModel');

// Obtener todas las reservas
const getAllClassBookings = async (req, res) => {
    try {
        const bookings = await classBookingModel.getAllClassBookings();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener una reserva por ID
const getClassBookingById = async (req, res) => {
    try {
        const booking = await classBookingModel.getClassBookingById(req.params.id);
        if (booking) {
            res.json(booking);
        } else {
            res.status(404).json({ error: 'Booking not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear una nueva reserva
const createClassBooking = async (req, res) => {
    const { class_id, user_id, scheduled_at, status } = req.body;
    try {
        const newBooking = await classBookingModel.createClassBooking(class_id, user_id, scheduled_at, status);
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar una reserva existente
const updateClassBooking = async (req, res) => {
    const { class_id, user_id, scheduled_at, status } = req.body;
    try {
        const updatedBooking = await classBookingModel.updateClassBooking(req.params.id, class_id, user_id, scheduled_at, status);
        if (updatedBooking) {
            res.json(updatedBooking);
        } else {
            res.status(404).json({ error: 'Booking not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar una reserva por ID
const deleteClassBooking = async (req, res) => {
    try {
        const deletedBooking = await classBookingModel.deleteClassBooking(req.params.id);
        if (deletedBooking) {
            res.json(deletedBooking);
        } else {
            res.status(404).json({ error: 'Booking not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAllClassBookings, getClassBookingById, createClassBooking, updateClassBooking, deleteClassBooking };

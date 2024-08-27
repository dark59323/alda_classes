const express = require('express');
const router = express.Router();
const classBookingController = require('../controllers/classBookingController');

// Obtener todas las reservas
router.get('/view', classBookingController.getAllClassBookings);

// Obtener una reserva por ID
router.get('/view/:id', classBookingController.getClassBookingById);

// Crear una nueva reserva
router.post('/insert', classBookingController.createClassBooking);

// Actualizar una reserva existente
router.put('/edit/:id', classBookingController.updateClassBooking);

// Eliminar una reserva por ID
router.delete('/delete/:id', classBookingController.deleteClassBooking);

module.exports = router;

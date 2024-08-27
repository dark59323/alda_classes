const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Obtener todos los pagos
router.get('/view', paymentController.getPayments);

// Obtener un pago por ID
router.get('/view/:id', paymentController.getPaymentById);

// Crear un nuevo pago
router.post('/insert', paymentController.createPayment);

// Actualizar un pago existente
router.put('/edit/:id', paymentController.updatePayment);

// Eliminar un pago
router.delete('/delete/:id', paymentController.deletePayment);

module.exports = router;

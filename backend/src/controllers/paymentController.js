const paymentModel = require('../models/paymentModel');

// Obtener todos los pagos
const getPayments = async (req, res) => {
    try {
        const payments = await paymentModel.getPayments();
        res.json(payments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener un pago por ID
const getPaymentById = async (req, res) => {
    try {
        const payment = await paymentModel.getPaymentById(req.params.id);
        if (payment) {
            res.json(payment);
        } else {
            res.status(404).json({ error: 'Payment not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear un nuevo pago
const createPayment = async (req, res) => {
    const { user_id, amount, status, payment_method } = req.body;
    try {
        const newPayment = await paymentModel.createPayment(user_id, amount, status, payment_method);
        res.status(201).json(newPayment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar un pago existente
const updatePayment = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { amount, status, payment_method } = req.body;
    try {
        const updatedPayment = await paymentModel.updatePayment(id, amount, status, payment_method);
        if (updatedPayment) {
            res.json(updatedPayment);
        } else {
            res.status(404).json({ error: 'Payment not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar un pago
const deletePayment = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const deletedPayment = await paymentModel.deletePayment(id);
        if (deletedPayment) {
            res.json(deletedPayment);
        } else {
            res.status(404).json({ error: 'Payment not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Exportar los métodos
module.exports = { getPayments, getPaymentById, createPayment, updatePayment, deletePayment };
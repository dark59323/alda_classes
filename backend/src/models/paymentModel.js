const client = require('../config/db');

// Obtener todos los pagos
const getPayments = async () => {
    const res = await client.query('SELECT * FROM payments');
    return res.rows;
};

// Obtener un pago por ID
const getPaymentById = async (id) => {
    const res = await client.query('SELECT * FROM payments WHERE payment_id = $1', [id]);
    return res.rows[0];
};

// Crear un nuevo pago
const createPayment = async (user_id, amount, status, payment_method) => {
    const res = await client.query(
        'INSERT INTO payments (user_id, amount, status, payment_method) VALUES ($1, $2, $3, $4) RETURNING *',
        [user_id, amount, status, payment_method]
    );
    return res.rows[0];
};

// Actualizar un pago existente
const updatePayment = async (id, amount, status, payment_method) => {
    const res = await client.query(
        'UPDATE payments SET amount = $1, status = $2, payment_method = $3 WHERE payment_id = $4 RETURNING *',
        [amount, status, payment_method, id]
    );
    return res.rows[0];
};

// Eliminar un pago
const deletePayment = async (id) => {
    const res = await client.query('DELETE FROM payments WHERE payment_id = $1 RETURNING *', [id]);
    return res.rows[0];
};

// Exportar las funciones
module.exports = { getPayments, getPaymentById, createPayment, updatePayment, deletePayment };

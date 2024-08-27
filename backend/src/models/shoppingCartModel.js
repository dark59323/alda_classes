const client = require('../config/db');

// Crear un nuevo carrito
const createShoppingCart = async (userId) => {
    const res = await client.query(
        'INSERT INTO shopping_cart (user_id) VALUES ($1) RETURNING *',
        [userId]
    );
    return res.rows[0];
};

// Obtener todos los carritos
const getAllShoppingCarts = async () => {
    const res = await client.query('SELECT * FROM shopping_cart');
    return res.rows;
};

// Obtener un carrito por ID
const getShoppingCartById = async (id) => {
    const res = await client.query('SELECT * FROM shopping_cart WHERE cart_id = $1', [id]);
    return res.rows[0];
};

// Actualizar un carrito
const updateShoppingCart = async (id, userId) => {
    const res = await client.query(
        'UPDATE shopping_cart SET user_id = $1, updated_at = NOW() WHERE cart_id = $2 RETURNING *',
        [userId, id]
    );
    return res.rows[0];
};

// Eliminar un carrito
const deleteShoppingCart = async (id) => {
    const res = await client.query('DELETE FROM shopping_cart WHERE cart_id = $1 RETURNING *', [id]);
    return res.rows[0];
};

module.exports = {
    createShoppingCart,
    getAllShoppingCarts,
    getShoppingCartById,
    updateShoppingCart,
    deleteShoppingCart
};

const client = require('../config/db');

// Obtener todos los items del carrito
const getCartItems = async () => {
    const res = await client.query('SELECT * FROM cart_items');
    return res.rows;
};

// Obtener un item del carrito por ID
const getCartItemById = async (id) => {
    const res = await client.query('SELECT * FROM cart_items WHERE item_id = $1', [id]);
    return res.rows[0];
};

// Crear un nuevo item en el carrito
const createCartItem = async (cart_id, class_id, quantity) => {
    const res = await client.query(
        'INSERT INTO cart_items (cart_id, class_id, quantity) VALUES ($1, $2, $3) RETURNING *',
        [cart_id, class_id, quantity]
    );
    return res.rows[0];
};

// Actualizar un item del carrito
const updateCartItem = async (id, quantity) => {
    const res = await client.query(
        'UPDATE cart_items SET quantity = $1 WHERE item_id = $2 RETURNING *',
        [quantity, id]
    );
    return res.rows[0];
};

// Eliminar un item del carrito
const deleteCartItem = async (id) => {
    const res = await client.query('DELETE FROM cart_items WHERE item_id = $1 RETURNING *', [id]);
    return res.rows[0];
};

module.exports = { getCartItems, getCartItemById, createCartItem, updateCartItem, deleteCartItem };

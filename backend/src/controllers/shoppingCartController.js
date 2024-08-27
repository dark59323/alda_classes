const shoppingCartModel = require('../models/shoppingCartModel');

// Crear un nuevo carrito
const createShoppingCart = async (req, res) => {
    try {
        const { user_id } = req.body;
        const newCart = await shoppingCartModel.createShoppingCart(user_id);
        res.status(201).json(newCart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener todos los carritos
const getAllShoppingCarts = async (req, res) => {
    try {
        const carts = await shoppingCartModel.getAllShoppingCarts();
        res.json(carts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener un carrito por ID
const getShoppingCartById = async (req, res) => {
    try {
        const cart = await shoppingCartModel.getShoppingCartById(req.params.id);
        if (cart) {
            res.json(cart);
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar un carrito
const updateShoppingCart = async (req, res) => {
    try {
        const { user_id } = req.body;
        const updatedCart = await shoppingCartModel.updateShoppingCart(req.params.id, user_id);
        if (updatedCart) {
            res.json(updatedCart);
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar un carrito
const deleteShoppingCart = async (req, res) => {
    try {
        const deletedCart = await shoppingCartModel.deleteShoppingCart(req.params.id);
        if (deletedCart) {
            res.json(deletedCart);
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createShoppingCart,
    getAllShoppingCarts,
    getShoppingCartById,
    updateShoppingCart,
    deleteShoppingCart
};

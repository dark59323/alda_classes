const cartItemModel = require('../models/cartItemModel');

// Obtener todos los items del carrito
const getCartItems = async (req, res) => {
    try {
        const items = await cartItemModel.getCartItems();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener un item del carrito por ID
const getCartItemById = async (req, res) => {
    try {
        const item = await cartItemModel.getCartItemById(req.params.id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ error: 'Cart item not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear un nuevo item en el carrito
const createCartItem = async (req, res) => {
    const { cart_id, class_id, quantity } = req.body;
    try {
        const newItem = await cartItemModel.createCartItem(cart_id, class_id, quantity);
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar un item del carrito
const updateCartItem = async (req, res) => {
    const { quantity } = req.body;
    try {
        const updatedItem = await cartItemModel.updateCartItem(req.params.id, quantity);
        if (updatedItem) {
            res.json(updatedItem);
        } else {
            res.status(404).json({ error: 'Cart item not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar un item del carrito
const deleteCartItem = async (req, res) => {
    try {
        const deletedItem = await cartItemModel.deleteCartItem(req.params.id);
        if (deletedItem) {
            res.json({ message: 'Cart item deleted', deletedItem });
        } else {
            res.status(404).json({ error: 'Cart item not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getCartItems, getCartItemById, createCartItem, updateCartItem, deleteCartItem };

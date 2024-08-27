const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/cartItemController');

// Obtener todos los items del carrito
router.get('/view', cartItemController.getCartItems);

// Obtener un item del carrito por ID
router.get('/view/:id', cartItemController.getCartItemById);

// Crear un nuevo item en el carrito
router.post('/insert', cartItemController.createCartItem);

// Actualizar un item del carrito
router.put('/edit/:id', cartItemController.updateCartItem);

// Eliminar un item del carrito
router.delete('/delete/:id', cartItemController.deleteCartItem);

module.exports = router;
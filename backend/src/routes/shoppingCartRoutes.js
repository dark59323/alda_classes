const express = require('express');
const router = express.Router();
const shoppingCartController = require('../controllers/shoppingCartController');

// Crear un nuevo carrito
router.post('/insert', shoppingCartController.createShoppingCart);

// Obtener todos los carritos
router.get('/view', shoppingCartController.getAllShoppingCarts);

// Obtener un carrito por ID
router.get('/view/:id', shoppingCartController.getShoppingCartById);

// Actualizar un carrito
router.put('/edit/:id', shoppingCartController.updateShoppingCart);

// Eliminar un carrito
router.delete('/delete/:id', shoppingCartController.deleteShoppingCart);

module.exports = router;

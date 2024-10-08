const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para iniciar sesión
router.post('/login', userController.login);

// Rutas CRUD para usuarios
router.get('/view', userController.getUsers);
router.get('/view/:id', userController.getUserById);
router.post('/insert', userController.createUser);
router.put('/edit/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;

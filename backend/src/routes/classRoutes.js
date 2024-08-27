const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

// Obtener todas las clases
router.get('/view', classController.getClasses);

// Obtener una clase por ID
router.get('/view/:id', classController.getClassById);

// Crear una nueva clase
router.post('/insert', classController.createClass);

// Actualizar una clase existente
router.put('/edit/:id', classController.updateClass);

// Eliminar una clase
router.delete('/delete/:id', classController.deleteClass);

module.exports = router;

const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// Obtener todos los profesores
router.get('/view', teacherController.getAllTeachers);

// Obtener un profesor por ID
router.get('/view/:id', teacherController.getTeacherById);

// Crear un nuevo profesor
router.post('/insert', teacherController.createTeacher);

// Actualizar un profesor existente
router.put('/edit/:id', teacherController.updateTeacher);

// Eliminar un profesor
router.delete('/delete/:id', teacherController.deleteTeacher);

module.exports = router;

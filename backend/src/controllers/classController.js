// src/controllers/classController.js
const classModel = require('../models/classModel');

// Obtener todas las clases
const getClasses = async (req, res) => {
    try {
        const classes = await classModel.getClasses();
        res.json(classes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener una clase por ID
const getClassById = async (req, res) => {
    try {
        const classData = await classModel.getClassById(req.params.id);
        if (classData) {
            res.json(classData);
        } else {
            res.status(404).json({ error: 'Class not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear una nueva clase
const createClass = async (req, res) => {
    const { title, description, price, duration, teacherId } = req.body;
    try {
        const newClass = await classModel.createClass(title, description, price, duration, teacherId);
        res.status(201).json(newClass);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar una clase existente
const updateClass = async (req, res) => {
    const { title, description, price, duration, teacherId } = req.body;
    try {
        const updatedClass = await classModel.updateClass(req.params.id, title, description, price, duration, teacherId);
        if (updatedClass) {
            res.json(updatedClass);
        } else {
            res.status(404).json({ error: 'Class not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar una clase
const deleteClass = async (req, res) => {
    try {
        const deletedClass = await classModel.deleteClass(req.params.id);
        if (deletedClass) {
            res.json(deletedClass);
        } else {
            res.status(404).json({ error: 'Class not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getClasses, getClassById, createClass, updateClass, deleteClass };

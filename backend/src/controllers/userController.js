const userModel = require('../models/userModel');

// Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await userModel.getUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        // Asegúrate de validar los datos de entrada aquí
        const newUser = await userModel.createUser({ name, email, password, role });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar un usuario por ID
const updateUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const updatedUser = await userModel.updateUser(req.params.id, { name, email, password, role });
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar un usuario por ID
const deleteUser = async (req, res) => {
    try {
        const result = await userModel.deleteUser(req.params.id);
        if (result) {
            res.status(204).send(); // No content
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };

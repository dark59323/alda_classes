const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

// Clave secreta para JWT (debería almacenarse en un archivo de configuración o variable de entorno)
const JWT_SECRET = 'tu_clave_secreta_aqui';

// Función para autenticar a un usuario
const authenticateUser = async (email, password) => {
    try {
        const users = await userModel.getUserByEmail(email);
        if (users.length === 0) return null;

        const user = users[0];
        if (user.password !== password) return null;

        return user;
    } catch (error) {
        throw new Error('Error al autenticar al usuario');
    }
};

// Controlador para iniciar sesión
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await authenticateUser(email, password);
        if (!user) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        const token = jwt.sign({ userId: user.user_id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Controladores CRUD para usuarios
const getUsers = async (req, res) => {
    try {
        const users = await userModel.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario' });
    }
};

const createUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const newUser = await userModel.createUser({ name, email, password, role });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
};

const updateUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const user = await userModel.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const updatedUser = await userModel.updateUser(req.params.id, { name, email, password, role });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const success = await userModel.deleteUser(req.params.id);
        if (!success) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
};

// Exportar los controladores
module.exports = { login, getUsers, getUserById, createUser, updateUser, deleteUser };

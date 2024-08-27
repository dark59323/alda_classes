const client = require('../config/db');

// Obtener todos los usuarios
const getUsers = async () => {
    const res = await client.query('SELECT * FROM users');
    return res.rows;
};

// Obtener un usuario por ID
const getUserById = async (id) => {
    const res = await client.query('SELECT * FROM users WHERE user_id = $1', [id]);
    return res.rows[0];
};

// Crear un nuevo usuario
const createUser = async (userData) => {
    const { name, email, password, role } = userData;
    const res = await client.query(
        'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, email, password, role]
    );
    return res.rows[0];
};

// Actualizar un usuario por ID
const updateUser = async (id, userData) => {
    const { name, email, password, role } = userData;
    const res = await client.query(
        'UPDATE users SET name = $1, email = $2, password = $3, role = $4 WHERE user_id = $5 RETURNING *',
        [name, email, password, role, id]
    );
    return res.rows[0];
};

// Eliminar un usuario por ID
const deleteUser = async (id) => {
    const res = await client.query('DELETE FROM users WHERE user_id = $1 RETURNING *', [id]);
    return res.rowCount > 0; // Devuelve true si se eliminó al menos un registro
};

// Exportar las funciones
module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };

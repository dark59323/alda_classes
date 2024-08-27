const client = require('../config/db');

// Obtener todas las clases
const getClasses = async () => {
    const res = await client.query('SELECT * FROM classes');
    return res.rows;
};

// Obtener una clase por ID
const getClassById = async (id) => {
    const res = await client.query('SELECT * FROM classes WHERE class_id = $1', [id]);
    return res.rows[0];
};

// Crear una nueva clase
const createClass = async (title, description, price, duration, teacherId) => {
    const res = await client.query(
        'INSERT INTO classes (teacher_id, title, description, price, duration) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [teacherId, title, description, price, duration]
    );
    return res.rows[0];
};

// Actualizar una clase existente
const updateClass = async (id, title, description, price, duration, teacherId) => {
    const res = await client.query(
        'UPDATE classes SET title = $1, description = $2, price = $3, duration = $4, teacher_id = $5 WHERE class_id = $6 RETURNING *',
        [title, description, price, duration, teacherId, id]
    );
    return res.rows[0];
};

// Eliminar una clase
const deleteClass = async (id) => {
    const res = await client.query('DELETE FROM classes WHERE class_id = $1 RETURNING *', [id]);
    return res.rows[0];
};

module.exports = { getClasses, getClassById, createClass, updateClass, deleteClass };

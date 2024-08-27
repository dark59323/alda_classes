const client = require('../config/db');

// Obtener todos los profesores
const getAllTeachers = async () => {
    const res = await client.query('SELECT * FROM teachers');
    return res.rows;
};

// Obtener un profesor por ID
const getTeacherById = async (id) => {
    const res = await client.query('SELECT * FROM teachers WHERE teacher_id = $1', [id]);
    return res.rows[0];
};

// Crear un nuevo profesor
const createTeacher = async (user_id, bio, rating) => {
    const res = await client.query(
        'INSERT INTO teachers (user_id, bio, rating) VALUES ($1, $2, $3) RETURNING *',
        [user_id, bio, rating]
    );
    return res.rows[0];
};

// Actualizar un profesor existente
const updateTeacher = async (id, bio, rating) => {
    const res = await client.query(
        'UPDATE teachers SET bio = $1, rating = $2 WHERE teacher_id = $3 RETURNING *',
        [bio, rating, id]
    );
    return res.rows[0];
};

// Eliminar un profesor
const deleteTeacher = async (id) => {
    const res = await client.query('DELETE FROM teachers WHERE teacher_id = $1 RETURNING *', [id]);
    return res.rows[0];
};

module.exports = { getAllTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher };

const teacherModel = require('../models/teacherModel');

const getAllTeachers = async (req, res) => {
    try {
        const teachers = await teacherModel.getAllTeachers();
        res.json(teachers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getTeacherById = async (req, res) => {
    try {
        const teacher = await teacherModel.getTeacherById(req.params.id);
        if (teacher) {
            res.json(teacher);
        } else {
            res.status(404).json({ error: 'Teacher not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createTeacher = async (req, res) => {
    const { user_id, bio, rating } = req.body;
    try {
        const newTeacher = await teacherModel.createTeacher(user_id, bio, rating);
        res.status(201).json(newTeacher);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateTeacher = async (req, res) => {
    const { bio, rating } = req.body;
    try {
        const updatedTeacher = await teacherModel.updateTeacher(req.params.id, bio, rating);
        if (updatedTeacher) {
            res.json(updatedTeacher);
        } else {
            res.status(404).json({ error: 'Teacher not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteTeacher = async (req, res) => {
    try {
        const deletedTeacher = await teacherModel.deleteTeacher(req.params.id);
        if (deletedTeacher) {
            res.json(deletedTeacher);
        } else {
            res.status(404).json({ error: 'Teacher not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAllTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher };

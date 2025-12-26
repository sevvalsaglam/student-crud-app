const studentService = require('../services/studentService');

const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch students' });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await studentService.getStudentById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch {
    res.status(500).json({ message: 'Failed to fetch student' });
  }
};

const createStudent = async (req, res) => {
  try {
    await studentService.createStudent(req.body);
    res.status(201).json({ message: 'Student created' });
  } catch {
    res.status(500).json({ message: 'Failed to create student' });
  }
};

const updateStudent = async (req, res) => {
  try {
    await studentService.updateStudent(req.params.id, req.body);
    res.json({ message: 'Student updated' });
  } catch {
    res.status(500).json({ message: 'Failed to update student' });
  }
};

const deleteStudent = async (req, res) => {
  try {
    await studentService.deleteStudent(req.params.id);
    res.json({ message: 'Student deleted' });
  } catch {
    res.status(500).json({ message: 'Failed to delete student' });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};

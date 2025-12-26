const studentRepository = require('../repositories/studentRepository');

const getAllStudents = async () => {
  return await studentRepository.getAllStudents();
};

const getStudentById = async (id) => {
  return await studentRepository.getStudentById(id);
};

const createStudent = async (student) => {
  return await studentRepository.createStudent(student);
};

const updateStudent = async (id, student) => {
  return await studentRepository.updateStudent(id, student);
};

const deleteStudent = async (id) => {
  return await studentRepository.deleteStudent(id);
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};

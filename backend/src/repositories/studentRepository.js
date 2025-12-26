const { poolPromise, sql } = require('../config/db');

const getAllStudents = async () => {
  const pool = await poolPromise;
  const result = await pool.request().query('SELECT * FROM Students');
  return result.recordset;
};

const getStudentById = async (id) => {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('id', sql.Int, id)
    .query('SELECT * FROM Students WHERE StudentId = @id');
  return result.recordset[0];
};

const createStudent = async (student) => {
  const pool = await poolPromise;
  await pool.request()
    .input('name', sql.NVarChar, student.name)
    .input('email', sql.NVarChar, student.email)
    .input('phone', sql.NVarChar, student.phone)
    .input('department', sql.NVarChar, student.department)
    .query(`
      INSERT INTO Students (Name, Email, Phone, Department)
      VALUES (@name, @email, @phone, @department)
    `);
};

const updateStudent = async (id, student) => {
  const pool = await poolPromise;
  await pool.request()
    .input('id', sql.Int, id)
    .input('name', sql.NVarChar, student.name)
    .input('email', sql.NVarChar, student.email)
    .input('phone', sql.NVarChar, student.phone)
    .input('department', sql.NVarChar, student.department)
    .query(`
      UPDATE Students
      SET Name=@name, Email=@email, Phone=@phone, Department=@department
      WHERE StudentId=@id
    `);
};

const deleteStudent = async (id) => {
  const pool = await poolPromise;
  await pool.request()
    .input('id', sql.Int, id)
    .query('DELETE FROM Students WHERE StudentId=@id');
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};

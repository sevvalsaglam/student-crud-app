const BASE_URL = 'http://localhost:5050/api/students';

const request = async (url, options = {}) => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error('Request failed');
  return res.status !== 204 ? res.json() : null;
};

export const getAllStudents = () =>
  request(BASE_URL);

export const getStudentById = (id) =>
  request(`${BASE_URL}/${id}`);

export const createStudent = (student) =>
  request(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });

export const updateStudent = (id, student) =>
  request(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });

export const deleteStudent = (id) =>
  request(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });

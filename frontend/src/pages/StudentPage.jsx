import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../api/studentApi';

import StudentList from '../components/StudentList';
import StudentForm from '../components/StudentForm';

function StudentPage() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const loadStudents = async () => {
    setStudents(await getAllStudents());
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleSelect = async (id) => {
    setSelectedStudent(await getStudentById(id));
  };

  const handleCreateOrUpdate = async (formData) => {
    if (selectedStudent) {
      await updateStudent(selectedStudent.StudentId, formData);
    } else {
      await createStudent(formData);
    }

    setSelectedStudent(null);
    await loadStudents();

    Swal.fire({
      icon: 'success',
      title: 'Saved successfully',
      timer: 1200,
      showConfirmButton: false,
    });
  };

  const handleDelete = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: 'Are you sure?',
      text: 'This student will be permanently deleted',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      confirmButtonText: 'Yes, delete',
    });

    if (!isConfirmed) return;

    await deleteStudent(id);
    await loadStudents();

    Swal.fire({
      icon: 'success',
      title: 'Deleted!',
      timer: 1200,
      showConfirmButton: false,
    });
  };

  return (
    <div className="page-container">
      <h1>Student CRUD App</h1>

      <StudentForm
        onSubmit={handleCreateOrUpdate}
        selectedStudent={selectedStudent}
      />

      <StudentList
        students={students}
        onSelect={handleSelect}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default StudentPage;

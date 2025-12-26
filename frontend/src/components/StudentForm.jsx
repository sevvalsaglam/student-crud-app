import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  department: '',
};

function StudentForm({ onSubmit, selectedStudent }) {
  const [form, setForm] = useState(EMPTY_FORM);

  useEffect(() => {
    if (!selectedStudent) {
      setForm(EMPTY_FORM);
      return;
    }

    const { Name, Email, Phone, Department } = selectedStudent;

    setForm({
      name: Name,
      email: Email,
      phone: Phone,
      department: Department,
    });
  }, [selectedStudent]);

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasEmptyField = Object.values(form).some(
      (value) => !value.trim()
    );

    if (hasEmptyField) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Fields',
        text: 'All fields are required!',
      });
      return;
    }

    onSubmit(form);
    setForm(EMPTY_FORM);
  };

  return (
    <form className="glass-card" onSubmit={handleSubmit}>
      <h2>{selectedStudent ? 'Update Student' : 'Add Student'}</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
      />

      <button type="submit">Save</button>
    </form>
  );
}

export default StudentForm;

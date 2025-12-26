import { useState } from 'react';

function StudentList({ students, onSelect, onDelete }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleDetail = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="glass-card">
      <h2>Student List</h2>

      {students.map(
        ({ StudentId, Name, Department, Email, Phone, CreatedDate }) => (
          <div key={StudentId} className="student-item">
            {/* TOP ROW */}
            <div className="student-row">
              <div>
                <div className="student-name">{Name}</div>
                <div className="student-dept">{Department}</div>
              </div>

              <div className="actions">
                <button onClick={() => toggleDetail(StudentId)}>
                  Detail
                </button>
                <button
                  className="danger"
                  onClick={() => onDelete(StudentId)}
                >
                  Delete
                </button>
              </div>
            </div>

            {/* ACCORDION DETAIL */}
            {expandedId === StudentId && (
              <div className="student-detail">
                <p>
                  <strong>Email:</strong> {Email}
                </p>
                <p>
                  <strong>Phone:</strong> {Phone}
                </p>
                <p>
                  <strong>Created:</strong>{' '}
                  {new Date(CreatedDate).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>

                <button onClick={() => onSelect(StudentId)}>
                  Edit
                </button>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
}

export default StudentList;

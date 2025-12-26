class Student {
    constructor({
      studentId,
      name,
      email,
      phone,
      department,
      createdDate
    }) {
      this.studentId = studentId;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.department = department;
      this.createdDate = createdDate;
    }
  }
  
  module.exports = Student;
  
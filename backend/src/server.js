const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const studentRoutes = require('./routes/studentRoutes');
app.use('/api/students', studentRoutes);

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

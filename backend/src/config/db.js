const sql = require('mssql');

const dbConfig = {
  user: 'sa',
  password: 'YourStrong!Pass123',
  server: 'localhost',
  port: 1433,
  database: 'StudentCrudDB',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch(err => {
    console.error(' Database Connection Failed:', err);
    throw err;
  });

module.exports = { sql, poolPromise };

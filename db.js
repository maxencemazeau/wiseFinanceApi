const fastify = require('fastify')();
const mysql = require ('mysql2/promise');
const cors = require ('@fastify/cors');
const port = 8080;

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wisefinance',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

})

fastify.register(cors);

fastify.get('/users' , async(req, res) => {
    const sql = await connection.query('SELECT * FROM Users');
    const users = sql[0]
    res.send(users);
})


fastify.listen(port, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server is running on ${address}`);
  });
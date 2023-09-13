const fastify = require('fastify')();
const cors = require ('@fastify/cors');
const port = 8080;

fastify.register(cors);

fastify.register(require('./Routes/UsersRoutes'));
fastify.register(require('./Routes/GoalsRoutes'));
fastify.register(require('./Routes/CategoryRoutes'));


fastify.listen(port, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server is running on ${address}`);
  });
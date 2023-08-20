const UsersController = require('../Controller/UsersController');
const getUsers = require('../Controller/UsersController');

const usersRoutes = (fastify, options, done) => {
    fastify.get('/users', async (req, res) => {
            const users = await getUsers();
            res.send(users)
        
    })

    done();
}

module.exports = usersRoutes;
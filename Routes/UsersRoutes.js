const UsersController = require('../Controller/UsersController');

const usersRoutes = (fastify, options, done) => {
    fastify.get('/users', async (req, res) => {
            const users = await UsersController.getUsers();
            res.send(users)
        
    })

    fastify.get('/login', async(req, res) => {
        const { username, password } = req.query;
        const userLogin = await UsersController.UsersLogin(username, password);
        res.send(userLogin);
    })

    done();
}

module.exports = usersRoutes;
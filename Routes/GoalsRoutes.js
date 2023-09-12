const fastify = require('fastify');
const GoalsController = require('../Controller/GoalsController');

const GoalsRoutes = (fastify, option, done) => {

    fastify.get('/goal', async(req, res) => {
        const goal = await GoalsController.getGoals();
        res.send(goal);
    })

    fastify.get('/goalById/:id', async(req, res) => {
        const userId = req.params.id;
        const goalById = await GoalsController.getGoalsById(userId);
        res.send(goalById);
    })

    done();
}

module.exports = GoalsRoutes;
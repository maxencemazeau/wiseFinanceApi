const CategoryController = require('../Controller/CategoryController');

const CategoryRoutes = (fastify, option, done) => {

    fastify.get('/userCategory/:id', async(req, res) => {
        const userId= req.params.id;
        const userCategory = await CategoryController.getCategoryById(userId);
        res.send(userCategory);
    }) 

    done();
}

module.exports = CategoryRoutes;
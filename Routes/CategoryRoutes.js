const CategoryController = require('../Controller/CategoryController');

const CategoryRoutes = (fastify, option, done) => {

    fastify.get('/userDashboardCategory/:id', async(req, res) => {
        const userId= req.params.id;
        const userCategory = await CategoryController.getDashboardCategoryById(userId);
        res.send(userCategory);
    }) 

    fastify.get('/getCategoryByUser/:id', async(req, res) => {
        const userId = req.params.id;
        const userCategory = await CategoryController.getCategoryByUser(userId);
        res.send(userCategory);
    })

    fastify.post('/addNewCategory', async(req, res) => {
        const { userId, categoryName } = req.body;
        console.log(userId, categoryName);
        const addCategory = await CategoryController.addNewCategory(userId, categoryName);
        if (addCategory) {
            res.send('Category successfully created');
        } else {
            res.status(500).send('Failed to create the category');
        }
    })

    done();
}

module.exports = CategoryRoutes;
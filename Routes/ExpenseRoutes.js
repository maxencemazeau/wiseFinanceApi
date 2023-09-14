const ExpenseController = require('../Controller/ExpenseController');

const ExpenseRoutes = (fastify, option, done) => {

    fastify.get('/expenseByUser/:id', async(req, res) => {
        const userId= req.params.id;
        const expense = await ExpenseController.getExpenseByUser(userId);
        res.send(expense);
    })

    fastify.get('/expenseByDate', async(req, res) => {
        const { userId, startDate, endDate } = req.query;
        const expense = await ExpenseController.getExpenseByDate(userId, startDate, endDate);
        res.send(expense);
    })

    done();
}

module.exports = ExpenseRoutes;
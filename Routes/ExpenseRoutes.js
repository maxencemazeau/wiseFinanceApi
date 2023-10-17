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

    fastify.get('/expensePagination', async(req, res) => {
        const page = req.query.page || 1;
        const userId = req.query.userId;
        const itemByPage = 7;
        const offset = (page - 1) * itemByPage;
        const expense = await ExpenseController.getExpensePagination(userId, itemByPage, offset);
        const totalExpenseCount = await ExpenseController.getExpenseTotalPage(userId);
        const totalPage = Math.ceil(totalExpenseCount[0].total / itemByPage);
        res.send({expense, totalPage});
    })

    fastify.delete('/deleteExpense/:id', async(req, res) => {
        const id = req.params.id
        const deleteExpense = await ExpenseController.deleteExpense(id);
        console.log(deleteExpense);
        if(deleteExpense){
            res.send('Successfully deleted');
        }else {
            res.status(500).send('Failed to create the category');
        }
    })

    done();
}

module.exports = ExpenseRoutes;
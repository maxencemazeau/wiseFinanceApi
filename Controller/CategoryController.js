const db = require ('../db');

const getDashboardCategoryById = async(userId) => {
    const query = await db.query('SELECT category.categoryId, categoryName, budgetAmount, SUM(expenseAmount) AS totalExpense FROM Category INNER JOIN budget ON Category.categoryId = budget.categoryId INNER JOIN Expense ON Category.categoryId = Expense.categoryId WHERE category.userId = ? GROUP BY Category.categoryId, categoryName, budgetAmount LIMIT 4;', [userId]);
    const rows = query[0];
    return rows;
}

module.exports = {getDashboardCategoryById : getDashboardCategoryById}
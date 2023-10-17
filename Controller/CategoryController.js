const db = require ('../db');

const getDashboardCategoryById = async(userId) => {
    const query = await db.query('SELECT category.categoryId, categoryName, budgetAmount, SUM(expenseAmount) AS totalExpense FROM Category INNER JOIN budget ON Category.categoryId = budget.categoryId INNER JOIN Expense ON Category.categoryId = Expense.categoryId WHERE category.userId = ? GROUP BY Category.categoryId, categoryName, budgetAmount LIMIT 4;', [userId]);
    const rows = query[0];
    return rows;
}

const getCategoryByUser = async(userId) => {
    const query = await db.query('SELECT categoryId, categoryName FROM category WHERE userId = ?', [userId]);
    const rows = query[0];
    return rows;
}

const addNewCategory = async(userId, categoryName) => {
    try {
    const [query] = await db.query(`INSERT INTO category (userId, categoryName) values (?, ?)`, [userId, categoryName]);
    
    if (query.affectedRows > 0){
        return true;
    } else {
        return false
    }
    }catch(error) {
        console.error('Error inserting :', error);
    }
}

module.exports = {getDashboardCategoryById, getCategoryByUser, addNewCategory}
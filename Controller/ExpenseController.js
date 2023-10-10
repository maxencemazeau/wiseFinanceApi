const db = require('../db');

const getExpenseByUser = async(userId) => {
    const query = await db.query('SELECT expenseId, expenseName, expenseAmount, buyerName, expense.userId, category.categoryName, purchaseDate FROM Expense INNER JOIN Category ON expense.categoryId = Category.categoryId WHERE expense.userId = ? LIMIT 5', [userId]);
    const rows = query[0];
    return rows;
}

const getExpenseByDate = async(userId, startDate, endDate) => {
    const query = await db.query(`SELECT expenseId, SUM(expenseAmount) as expenseAmount, purchaseDate FROM Expense WHERE userId = ? AND purchaseDate BETWEEN ? AND ? GROUP BY purchaseDate`, [userId, startDate, endDate]);
    const rows = query[0];
    return rows;

}

const getExpensePagination = async(userId, itemByPage, offset) => {
    const query = await db.query(`SELECT expenseId, expenseName, expenseAmount, buyerName, expense.userId, category.categoryName, purchaseDate FROM Expense INNER JOIN Category ON expense.categoryId = Category.categoryId WHERE expense.userId = ? LIMIT ? OFFSET ?`, [userId, itemByPage, offset]);
    const rows = query[0];
    return rows;
}

const getExpenseTotalPage = async(userId) => {
    const query = await db.query(`SELECT COUNT(expenseId) as total FROM Expense WHERE userId = ?`, [userId])
    const rows = query[0];
    return rows;
}

module.exports = {getExpenseByUser, getExpenseByDate, getExpensePagination, getExpenseTotalPage};
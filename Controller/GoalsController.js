const db = require('../db');

const getGoals = async () => {
    const query = await db.query('SELECT * FROM Goal');
    const rows = query[0];
    return rows;
}

const getGoalsById = async(userId) => {
    const query = await db.query('SELECT goalId, userId, goal.goalTypeId, targetAmount, goalName FROM Goal INNER JOIN GoalType ON goal.goalTypeID = goalType.goalTypeID WHERE userId = ? LIMIT 7', [userId]);
    const rows = query[0];
    return rows;
}

const Register = async( firstName, lastName, email, username, password ) => {
    const query = await db.query('INSERT INTO users (firstName, lastName, email, username, password) values (?, ?, ?, ? ,?)', [firstName, lastName, email, username, password])
    return query[0].affectedRows === 1;
}


module.exports = { getGoals : getGoals, getGoalsById : getGoalsById, Register : Register};
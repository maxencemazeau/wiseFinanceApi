const db = require('../db');

const getUsers = async () => {
    const query = await db.query('SELECT * FROM Users');
    const rows = query[0];
    return rows;
}


module.exports = getUsers;
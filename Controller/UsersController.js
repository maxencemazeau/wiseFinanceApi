const db = require('../db');

const getUsers = async () => {
    const query = await db.query('SELECT * FROM Users');
    const rows = query[0];
    return rows;
}

const UsersLogin = async(username, password) => {
    const query = await db.query('SELECT username, password FROM Users WHERE username = ? and password = ?', [username, password]);
    const rows = query[0];
    return rows;
}


module.exports = { getUsers : getUsers, UsersLogin : UsersLogin};
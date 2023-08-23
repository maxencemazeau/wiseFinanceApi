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

const Register = async( firstName, lastName, email, username, password ) => {
    const query = await db.query('INSERT INTO users (firstName, lastName, email, username, password) values (?, ?, ?, ? ,?)', [firstName, lastName, email, username, password])
    return query[0].affectedRows === 1;
}


module.exports = { getUsers : getUsers, UsersLogin : UsersLogin, Register : Register};
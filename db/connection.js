const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    password: '',
    user:'',
    database: 'mtg_db'
});

module.exports = db;
const mysql = require('mysql');

const db = mysql.createConnection (
    {
        host: 'localHost',
        user: 'root',
        password: 'bodhibaer2017',
        database: 'employees_db'
    },

    console.log('connected')
);

db.connect((err) => {
    if (err) throw err;
});

module.exports = db;

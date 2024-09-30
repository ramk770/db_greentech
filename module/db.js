const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'bpog90yuwksiglbd1zwm-mysql.services.clever-cloud.com',
    user: 'u2wpv6nr97zdfzro',
    password: 'a9vEDjY1qAKjvMTi4u4v',
    database: 'bpog90yuwksiglbd1zwm',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('MySQL Connected...');
});

module.exports = db;
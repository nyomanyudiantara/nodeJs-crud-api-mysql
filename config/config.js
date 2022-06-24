var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejs_nested',
    port: '3306'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql connected');
});

module.exports = conn;
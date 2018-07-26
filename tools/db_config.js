// 引包
const mysql = require('mysql');

// 配置数据库
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'newssql'
});

// 连接数据库
connection.connect();

// 导出模块
module.exports = connection;
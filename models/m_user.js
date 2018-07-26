// 专门处理c_user.js的数据模型
// 引包
const db = require('../tools/db_config');

// 处理邮箱验证
function checkEmail (email, callback) {
	// 校验邮箱
	const sqlstr = 'SELECT * FROM `users` WHERE `email`=?';
	db.query(sqlstr, email, (err, results) => {
		if(err) {
			return callback(err);
		}
		callback(null, results);
	})
}

// 导出校验邮箱模块
exports.checkEmail = checkEmail;
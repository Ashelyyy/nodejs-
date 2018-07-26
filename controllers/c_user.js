// 处理函数

// 引包
const mysql = require('mysql');
const db = require('../tools/db_config');
const M_user = require('../models/m_user.js')

// 1.处理函数

// 渲染登陆页面
exports.showSignin = (req, res)=> {
	res.render('signin.html');
}

// 处理登录表单的请求
exports.handleSignin = (req, res) => {
	// 获取表单数据(post)
	const body = req.body;
	console.log(body);
	// 邮箱验证
	M_user.checkEmail(body.email, (err, results) => {
		if(err) {
			return res.send({
				code: 500,
				message: err.message
			})
		}

		// 验证邮箱存不存在
		if(!results[0]) {
			return res.send({
				code: 1,
				message: '邮箱不存在'
			})
		}

		// 邮箱存在
		// 验证输入的邮箱与密码一致不一致
		if(results[0].password != body.password) {
			return res.send({
				code: 2,
				message: '密码不正确'
			})
		}

		// 如果密码正确,提示客户端跳转
		res.send({
			code: 200,
			message: '登录成功,请跳转到列表页'
		})
	})
}

// 2.导出

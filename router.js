// 1.导入express包
const express = require('express');
const user = require('./controllers/c_user'); 

// 2.返回router对象
const router = express.Router();

// 3.配置路由,找到相应处理函数
router.get('/signin', user.showSignin);
router.post('/handleSignin', user.handleSignin);

// 4.返回路由模块
module.exports = router;
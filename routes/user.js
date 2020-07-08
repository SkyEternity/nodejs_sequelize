var express = require('express');
var router = express.Router();
var User = require('../model').User




// ------------------------------ 创建用户 ------------------------------
//当用户名相同时不给创建
var Setuser = function(req, res) {
	User.findOne({
		where: {
			name: req.query.name
		},
		raw: true,
	}).then((rej) => {
		if(rej) {
			res.json({
				code:1,
				message: '用户已经创建'
			})
		}else {
			User.create({
				name: req.query.name,
				age: req.query.age,
				sex: req.query.sex,
				desc: req.query.desc,
			}).then(() => {
				res.json(200,{
					code: 0,
					message: '用户创建成功'
				})
			})
		}
	}).catch((err) => {
		console.log(err);
	})
}

// ------------------------------ 删除用户 ------------------------------
//删除多行暂时不会
var Deluser = function(req, res) {
	User.destroy({
		where: {
			id: req.params.id
		}
	}).then((rej) => {
		if(rej) {
			res.json({
				code: 0,
				message: '删除成功'
			})
		}else {
			res.json({
				code: 1,
				message: '没有此用户'
			})

		}
	}).catch((err) => {
		console.log(err);
	})
}

// ------------------------------ 更新用户 ------------------------------
// 根据id一次性修改多条也不会
var Updatauser = function(req, res) {
	User.update({
		desc: req.query.desc
	}, {
		where: {
			id: req.params.id
		}
	}).then((rej) => {
		if(rej[0]) {
			res.json({
				code: 0,
				message: '更新成功'
			})
		}else {
			res.json({
				code: 1,
				message: '没有找到此用户'
			})
		}
	}).catch((err) => {
		console.log(err);
	})
}

// ------------------------------ 查看用户 ------------------------------
var Lookuser = function(req, res) {
	//单条查询
	if(req.query.key) {
		User.findOne({
			where: {
				name: req.query.key
			},
			// raw: true, //会返回数据库中的原始结果
		}).then((rej) => {
			res.json({
				code:0,
				data: rej
			})
		})

	// 多条查询
	}else {
		User.findAndCountAll({
			limit: Number(req.query.limit) ||10,
			offset: Number(req.query.offset) || 0,
		}).then((rej) => {
			res.json({
				code: 0,
				data: rej
			})
		})

	}
	
}


router.post('/set', Setuser);  				//创建用户
router.delete('/del/:id', Deluser);  		//删除用户
router.put('/updata/:id', Updatauser);  	//更新用户
router.get('/look', Lookuser);  			//查看用户

module.exports = router;

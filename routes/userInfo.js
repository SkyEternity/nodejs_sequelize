let express = require('express'),
	router = express.Router(),
	model = require('../model'),
	User = model.User,
	UserInfo = model.UserInfo;

//	hasMany得到的是数组 1对多
//	hasOne得到的是一个对象  1对1
User.hasMany(UserInfo,{foreignKey:'uid', as: 'info'}) //userInfo里面包含uid   //userInfo的数据会在info中  
// User.belongsTo(UserInfo,{foreignKey:'uid', as: 'info'})    //user 里面包含uid
// UserInfo.findAll({
// 	include: [User]
// }).then((res) => {
// 	console.log(res);
// })

router.get('/', function(req, res) {
	User.findOne({
		where: {
			id: 2
		},  //user的查询条件
		include: {
			model: UserInfo, // 关联查询
			as: 'info' // 别名
			// where: {} // userInfo的查询条件
		}
	}).then((rej) => {
		res.json({
			data: rej
		})
		// console.log(res);
	})
})

module.exports = router;  

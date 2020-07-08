let express = require('express'),
	router = express.Router(),
	model = require('../model'),
	User = model.User,
	UserInfo = model.UserInfo,
	UserProject = model.UserProject;

//括号里的为目标模型，外边的为原模型
//hasOne是向目标插入关键件 belongsTo是向 UserInfo中添加关联键
// ------------------------------ belongsTo ------------------------------	

// 1. UserInfo.belongsTo(User)   
//	  会为UserInfo自动生成一个userId的值  前提是userId得存在
// 2. UserInfo.belongsTo(User, {as: role})   as相当与别名
//	  会为UserInfo自动生成一个roleId的值  前提是roleId得存在
// 3. UserInfo.belongsTo(User, {foreignKey: 'uid', as:'info'})
//	  为UserInfo添加uid和info    info==User  

//我认为一般使用第一个

// ------------------------------ HasOne ------------------------------	

// 1. User.hasOne(UserInfo）  
//	  会添加一个UserId到UserInfo里面   前提是userId得存在
// 2. User.hasOne(UserInfo, {as: role}） as相当与别名
// 3. User.hasOne(UserInfo, {foreignKey: 'uid'})
// 	  foreignKey使用UserInfo中已经存在的字段
// 4. User.hasOne(UserInfo, {foreignKey: 'uid' as: 'info'})
//	  为UserInfo添加uid   并且在user_info的字段名改为info

















//	hasMany得到的是数组 1对多
//	hasOne得到的是一个对象  1对1
User.hasMany(UserInfo,{foreignKey:'uid'})         //userInfo里面包含uid   //userInfo的数据会在info中  
// User.hasOne(UserInfo, {as: 'xxx'})
// UserInfo.belongsToMany(User, {through: 'user_project'});

// UserInfo.belongsTo(User, {foreignKey: 'uid', as:'info'})
// UserInfo.belongsTo(User)
// User.belongsTo(UserInfo,{foreignKey:'uid', as: 'info'})    //user 里面包含uid
// UserInfo.findAll({
// 	include: [User]
// }).then((res) => {
// 	console.log(res);
// })

// UserInfo.create({
// 	phone: '123456'
// })

router.get('/', function(req, res) {

	User.findOne({
		// where: {
		// 	id: 1
		// },
		include: [{
			// through: { attributes: [] },
			// req/uired: false,
			model: UserInfo,
			// attributes: [],     //不反悔关联表信息
			// attributes: ['id']   //可以对关联表的信息进行筛选
		}]
	}).then((rej) => {

		res.json({
			data: rej
		})
	})


	// UserInfo.findAll({
	// 	include: {
	// 		// through: { attributes: [] },÷
	// 		model: User,
	// 		attributes: ['id'],
	// 		through: { attributes: [] },
    // 		required: false
			
	// 	}
	// }).then((rej) => {
	// 	res.json({
	// 		data: rej
	// 	})
	// })

	// UserInfo.findAll({
	// 	// where: {
	// 	// 	id: 2
	// 	// },  //user的查询条件
	// 	include: {
	// 		model: User, // 关联查询
	// 		through: 'user_project'
	// 		// as: 'info' // 别名
	// 		// as: 'xxx'
	// 		// where: {} // userInfo的查询条件
	// 	}
	// }).then((rej) => {
	// 	res.json({
	// 		data: rej
	// 	})
	// 	// console.log(res);
	// })
})

module.exports = router;  

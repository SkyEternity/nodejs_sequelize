let Sequelize = require('sequelize');
	config = require('../config/db');

//连接数据库
let sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
	host: config.mysql.host,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 30000
	}
});

//创建model
let User = sequelize.define(
	'user',
	{
		name: Sequelize.STRING(10),
		age: Sequelize.STRING(3),
		sex: Sequelize.STRING,
		desc: Sequelize.STRING,
	},
	{
		timestamps: false //关闭Sequelizeze关闭自动添加timestamp的功能
	},
	{
		freezeTableName: true // Model 对应的表名将与model名相同
	}
)
module.exports = User;
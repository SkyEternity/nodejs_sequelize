let Sequelize = require('sequelize');
	sequelize = require('../config/conf');


//创建model
let User = sequelize.define(
	'user',
	{
		id: {
			autoIncrement: true,	 // 自动递增
			type: Sequelize.INTEGER,
			primaryKey: true 		 // 声明主键
		},
		name: Sequelize.STRING(10),
		// age: Sequelize.STRING(3),
		// sex: Sequelize.STRING,
		// desc: Sequelize.STRING,
	},
	{
		timestamps: false, //关闭Sequelizeze关闭自动添加timestamp的功能
		freezeTableName: true // Model 对应的表名将与model名相同
	},
)
module.exports = User;
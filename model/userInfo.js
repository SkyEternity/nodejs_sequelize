let Sequelize = require('sequelize'),
	sequelize = require('../config/conf'),
	UserInfo = sequelize.define(
		'user_info',
		{
			id: {
				autoIncrement: true,	 // 自动递增
				type: Sequelize.INTEGER,
				primaryKey: true, 		 // 声明主键
				
			},
			uid: {
				type: Sequelize.INTEGER,
				unique: true,
				allowNull: false,
			},
			userId: {
				type: Sequelize.INTEGER,
				unique: true,
				allowNull: false,
			},
			phone: Sequelize.STRING
		},
		{
			timestamps: false, //关闭Sequelizeze关闭自动添加timestamp的功能
			freezeTableName: true // Model 对应的表名将与model名相同
		},
	)
module.exports = UserInfo
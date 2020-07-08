let Sequelize = require('sequelize'),
	sequelize = require('../config/conf'),
	UserProject = sequelize.define(
		'user_project',
		{
			status: Sequelize.SMALLINT,
			userInfoId:  Sequelize.SMALLINT,
			userId:  Sequelize.SMALLINT,
		},
		{
			timestamps: false, //关闭Sequelizeze关闭自动添加timestamp的功能
			freezeTableName: true // Model 对应的表名将与model名相同
		},
	)
module.exports = UserProject
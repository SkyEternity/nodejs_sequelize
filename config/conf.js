let Sequelize = require('sequelize');
	config = require('./db.js')

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

module.exports = sequelize
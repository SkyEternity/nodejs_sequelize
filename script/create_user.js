let user = require('../model').User,
	userInfo = require('../model').UserInfo;


user.sync()
userInfo.sync()
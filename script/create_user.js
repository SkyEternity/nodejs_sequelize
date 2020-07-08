let user = require('../model').User,
	userInfo = require('../model').UserInfo,
	userProject = require('../model').UserProject;
user.sync()
userInfo.sync()
userProject.sync()
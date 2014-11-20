'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../');
module.exports = {
	ROOT: rootPath,
	NODE_ENV:process.env.NODE_ENV || 'DEV',
	PORT: process.env.PORT || 8080,
	DATA_SERVICE_URL: process.env.DATA_SERVICE_URL || "url.com",
	DATA_SERVICE_URL_PORT: process.env.DATA_SERVICE_URL_PORT || 80,		
	BASE_URL: process.env.BASE_URL || "url.com",
	BASE_URL_PORT: process.env.BASE_URL_PORT || 8080	
};
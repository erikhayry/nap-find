// config
var config  = require('../../config/config'),
	url = require('url'),
	request = require('request');

module.exports.fetchData = function(url, callback) {
	request({
		url: url
	}, function (err, res, body) {
		if (!err) {
			if (parseInt(res.statusCode, 10) === 200) {
				body = JSON.parse(body);
				callback(err, {res:res,body:body});
			} else {
				config.logger.warn('Request invalid response', {request: url,statusCode:res.statusCode});
				callback(err, {res:res,body:body});
			}
		} else {
			config.logger.error('Request has an error', {request: url,error:err});
			callback(err, {res:res,body:body});
		}
	});
};
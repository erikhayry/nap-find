var config = require('../../../config/config'),
	_ = require('lodash'),
	url = require('url'),
	dataRequest = require(config.ROOT + '/app/utilities/dataRequest'),
	async = require('async');

var loginController = {
    // controller

    loginUser: function(req, res) {
        var pathname = _.template("/manager/<%= managerId %>/overview"),
            managerUrl = url.format({
                protocol: 'http',
                hostname: config.BASE_URL,
                port: config.BASE_URL_PORT,
                pathname: pathname(res.locals)
            });
            res.redirect(managerUrl);
    }
};

module.exports = {
    loginController: loginController
};
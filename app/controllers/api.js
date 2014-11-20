var config = require('../../config/config'),
	_ = require('lodash'),
	url = require('url'),
	dataRequest = require(config.ROOT + '/app/utilities/dataRequest'),
	async = require('async');

var apiController = {
    // controller

    renderResponse: function(req, res) {
    var pathname = _.template("/fantasy/<%= view %>/<%= code %>/<%= type %>"),
		apiUrl = url.format({
            protocol: 'http',
            hostname: config.DATA_SERVICE_URL,
            port: config.DATA_SERVICE_URL_PORT,
            pathname: pathname(res.locals)
        });
    
		async.parallel({
            dataRequestResponse: function(callback) {
                dataRequest.fetchData(apiUrl, callback);
            }
        }, function(error, results) {
            if (!error) {
		        res.json(results.dataRequestResponse.body);                
            }

        });

    }
};

module.exports = {
    apiController: apiController
};
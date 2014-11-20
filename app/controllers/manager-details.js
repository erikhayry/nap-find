var config = require('../../config/config'),
	_ = require('lodash'),
    url = require('url'),
	dataRequest = require(config.ROOT + '/app/utilities/dataRequest'),
	async = require('async');

var managerDetailsController = {
    // controller

    renderPage: function(req, res) {
    var overviewApiUrl = url.format({
            protocol: 'http',
            hostname: config.BASE_URL,
            port: config.BASE_URL_PORT,
            pathname: _.template("/api/v1/manager/<%= code %>/overview",res.locals)
        });
    var transfersApiUrl = url.format({
            protocol: 'http',
            hostname: config.BASE_URL,
            port: config.BASE_URL_PORT,
            pathname: _.template("/api/v1/manager/<%= code %>/transfers",res.locals)
        });
		async.parallel({
            overviewRequestResponse: function(callback) {
                dataRequest.fetchData(overviewApiUrl, callback);
            },
            transferRequestResponse: function(callback) {
                dataRequest.fetchData(transfersApiUrl, callback);
            }           
        }, function(error, results) {
            if (!error) {
                var template = 'manager-details';
                res.render(template, 
                    {
                        metadata: { 
                        title: results.overviewRequestResponse.body.manager + ' | ' + results.overviewRequestResponse.body.team + ' | Finaleleven.com'
                    },
                    overview: results.overviewRequestResponse.body,
                    transfers: results.transferRequestResponse.body,
                    layout: 'layouts/default',
                    template: template
                });              
            }

        });

    }
};

module.exports = {
    managerDetailsController: managerDetailsController
};
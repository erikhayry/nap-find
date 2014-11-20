var config = require('../../config/config'),
	_ = require('lodash'),
    url = require('url'),
	dataRequest = require(config.ROOT + '/app/utilities/dataRequest'),
	async = require('async');

var leagueDetailsController = {
    // controller

    renderPage: function(req, res) {
    var leagueOverviewApiUrl = url.format({
            protocol: 'http',
            hostname: config.BASE_URL,
            port: config.BASE_URL_PORT,
            pathname: _.template("/api/v1/league/<%= code %>/overview",res.locals)
        });
    console.log(leagueOverviewApiUrl)
		async.parallel({
            leagueOverviewRequestResponse: function(callback) {
                dataRequest.fetchData(leagueOverviewApiUrl, callback);
            }          
        }, function(error, results) {
            if (!error) {
                var template = 'league-overview';
                res.render(template, 
                    {
                        metadata: { 
                        title: results.leagueOverviewRequestResponse.body.title + ' | League | Finaleleven.com',
                    },
                    league: results.leagueOverviewRequestResponse.body,
                    layout: 'layouts/default',
                    template: template
                });              
            }

        });

    }
};

module.exports = {
    leagueDetailsController: leagueDetailsController
};
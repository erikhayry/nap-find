var config = require('../../config/config')
var globalMiddleware = require(config.ROOT + '/app/middleware/global');
var requestMiddleware = require(config.ROOT + '/app/middleware/request');
var leagueOverviewController = require(config.ROOT + '/app/controllers/league-overview');

var urlParams = {
    init: function(app) {
        
    }
};

var routes = {
    init: function(app) {

        app.get('/league/:code/overview',
            globalMiddleware.setDefaults,
            requestMiddleware.requestTypes.setLeagueRequest,
            leagueOverviewController.leagueDetailsController.renderPage
        );


    }
};

var redirects = {
    
    init: function(app) {
        // redirects
    } 
    
};

module.exports = {
    urlParams: urlParams,
    routes: routes,
    redirects: redirects
};
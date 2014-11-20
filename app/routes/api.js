var config = require('../../config/config')
var globalMiddleware = require(config.ROOT + '/app/middleware/global');
var requestMiddleware = require(config.ROOT + '/app/middleware/request');
var apiController = require(config.ROOT + '/app/controllers/api');


var urlParams = {
    init: function(app) {

    }
};

var routes = {
    init: function(app) {

        app.get('/api/:apiVersion/:apiRequest/:code/:type' ,
            globalMiddleware.setDefaults,
            requestMiddleware.requestTypes.setApiRequest,
            apiController.apiController.renderResponse
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
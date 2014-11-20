var config = require('../../config/config')
var globalMiddleware = require(config.ROOT + '/app/middleware/global');
var requestMiddleware = require(config.ROOT + '/app/middleware/request');
var managerDetailsController = require(config.ROOT + '/app/controllers/manager-details');

var urlParams = {
    init: function(app) {
        
    }
};

var routes = {
    init: function(app) {

        app.get('/manager/:code/overview' ,
            globalMiddleware.setDefaults,
            requestMiddleware.requestTypes.setManagerRequest,
            managerDetailsController.managerDetailsController.renderPage
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
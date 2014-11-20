var config = require('../../config/config')
var servicesMiddleware = require(config.ROOT + '/app/middleware/services');
var loginController = require(config.ROOT + '/app/controllers/services/login');

var urlParams = {
    init: function(app) {

    }
};

var routes = {
    init: function(app) {

        app.post('/services/login' ,
            servicesMiddleware.setDefaults,
            loginController.loginController.loginUser
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
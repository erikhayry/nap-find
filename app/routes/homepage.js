var config = require('../../config/config')
var homepageController = require(config.ROOT + '/app/controllers/homepage');

var urlParams = {
    init: function(app) {
       
    }
};

var routes = {
    init: function(app) {

        app.get('/search/popular/:type',
            homepageController.homepageController.renderPage
        );
    }
};

var redirects = {
    
    init: function(app) {
        app.get('/',
            function(req, res, next){
                res.redirect(302, '/search/popular/realtime');
            }
        );
    } 
    
};

module.exports = {
    urlParams: urlParams,
    routes: routes,
    redirects: redirects
};
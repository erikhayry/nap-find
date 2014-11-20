var config = require('../../config/config')
var searchTermController = require(config.ROOT + '/app/controllers/search-term');

var urlParams = {
    init: function(app) {
       
    }
};

var routes = {
    init: function(app) {

        app.get('/search/term/:searchTerm/:type',
            searchTermController.searchTermController.renderPage
        );
    }
};

var redirects = {
    
    init: function(app) {
        app.get('/search/term/:searchTerm',
            function(req, res, next){
                res.redirect(302, '/search/term/' + req.params.searchTerm + '/realtime');
            }
        );
    } 
    
};

module.exports = {
    urlParams: urlParams,
    routes: routes,
    redirects: redirects
};
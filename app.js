// config
var config = require(__dirname + '/config/config');

// Require our libraries
var expressUtilities = require(config.ROOT + '/app/utilities/express');

/********* Express Configuration *******/
var app = expressUtilities.appConfiguration.init();


/********* homepage Routes & Redirects ***********/
var homepageRoutes = require(config.ROOT + '/app/routes/homepage');
homepageRoutes.urlParams.init(app);
homepageRoutes.routes.init(app);
homepageRoutes.redirects.init(app);

/********* search term Routes & Redirects ***********/
var searchTermPageRoutes = require(config.ROOT + '/app/routes/search-term');
searchTermPageRoutes.urlParams.init(app);
searchTermPageRoutes.routes.init(app);
searchTermPageRoutes.redirects.init(app);

/********* api Routes & Redirects ***********/
var apiRoutes = require(config.ROOT + '/app/routes/api');
apiRoutes.urlParams.init(app);
apiRoutes.routes.init(app);
apiRoutes.redirects.init(app);


app.listen(config.PORT);
config.logger.info('Service started on port ' + config.PORT);

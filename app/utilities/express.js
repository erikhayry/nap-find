// config
var config = require('../../config/config.js');

var express = require("express");
var hbs = require('express-hbs');
var expressParams = require('express-params');

var bodyParser = require('body-parser')

var appConfiguration = {

    templateConfig: function(app) {

        app.engine('hbs', hbs.express3({
          partialsDir: config.ROOT + '/app/views/partials',
          layoutsDir: config.ROOT + '/app/views/layouts'
        }));
        
        //helpers
        hbs.registerHelper('isActive', function(item, current){
            return (item === current) ? 'is-active' : '';
        });

        hbs.registerHelper('index', function(index){
            return index+1;
        });

        app.set('view engine', 'hbs');
        
        app.set('views', config.ROOT + '/app/views');        

        //if (config.NODE_ENV === "dev") {
            app.use(express.static(config.ROOT + '/assets'));
        //}
    },

    commonURLParams: function(app) {
        // Define common parameter names contained within URLs
        expressParams.extend(app);
        app.param('apiRequest', /league|manager/);
        app.param('code', /[0-9]/);
        app.param('type', /overview/);

    },

    init: function() {
        var app = express();

        appConfiguration.templateConfig(app);
        //appConfiguration.commonURLParams(app);

        app.enable('view cache');
        app.disable('etag');
        app.disable('x-powered-by');

        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())



        //use the express-validator plugin for sanitization,filtering and validation
        //app.use(expressValidator);

        //use cookie parse for extracting cookies
        //app.use(express.cookieParser());

        //app.use(md.middleware.sanitizeParam);
        //app.use(app.router);

        return app;
    }
};


module.exports = {
    appConfiguration: appConfiguration
};
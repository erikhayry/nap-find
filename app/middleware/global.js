var config = require('../../config/config');

var globalMiddleware = {


    setDefaults: function(req, res, next) {
        var obj = {
        	apiVersion:  req.params.apiVersion ? req.params.apiVersion : undefined,
            code:  req.params.code,
            type:  req.params.type
        };
        res.locals = obj;
        next();
    }

};

module.exports = {
    setDefaults: globalMiddleware.setDefaults
};
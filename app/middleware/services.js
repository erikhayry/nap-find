var config = require('../../config/config');

var servicesMiddleware = {


    setDefaults: function(req, res, next) {
        var obj = {
            managerId: req.body['txt-manager-id'],
            rememberUser:  req.body['chk-remember-login'] ? req.body['chk-remember-login'] : null
        };
        res.locals = obj;
        next();
    }

};

module.exports = {
    setDefaults: servicesMiddleware.setDefaults
};
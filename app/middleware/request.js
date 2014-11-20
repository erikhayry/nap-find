var config = require('../../config/config');

var requestTypes = {


    setLeagueRequest: function(req, res, next) {
        res.locals.view = 'league';
        next();
    },

	setManagerRequest: function(req, res, next) {
        res.locals.view = 'manager';
        next();
    },

	setApiRequest: function(req, res, next) {
        res.locals.view = req.params.apiRequest;
        next();
    },        

};

module.exports = {
    requestTypes: requestTypes
};
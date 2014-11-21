var config = require('../../config/config');
var async = require('async');
var dataRequest = require(config.ROOT + '/app/utilities/dataRequest');

var popularController = {
    // controller

    renderPage: function(req, res) {
        async.parallel({
            collectPopular: function(callback) {
                dataRequest.fetchData('http://10.5.17.226:3000/metrics/aggregation/search/popular/'+ req.params.type, callback);
            }          
        }, function(error, results) {

        var template = 'popular';
        
        var barChartData = results.collectPopular.body.slice(0, 10)  

        res.render(template, {
        	metadata: {
        		title: ''
        	},
			title: '',
			layout: 'default',
            template: template,
            type: req.params.type,
            searchTerms:  results.collectPopular.body,
            barChartData: barChartData   
		});

    })
        
    }
};

module.exports = {
    popularController: popularController
};
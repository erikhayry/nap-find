var config = require('../../config/config');

var searchTermController = {
    // controller

    renderPage: function(req, res) {
        console.log(req.params)
        var template = 'search-term';
        res.render(template, {
        	metadata: {
        		title: ''
        	},
			title: req.params.searchTerm,
			layout: 'default',
            data: 'Some data',
            type: req.params.type,
            searchTerm: req.params.searchTerm,
            template: template
		});
        
    }
};

module.exports = {
    searchTermController: searchTermController
};
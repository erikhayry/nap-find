var config = require('../../config/config');

var searchTermController = {
    // controller

    renderPage: function(req, res) {

        var template = 'search-term';
        res.render(template, {
        	metadata: {
        		title: ''
        	},
			title: req.params.searchTerm,
			layout: 'default',
            data: [
                    {
                        "code": "Germany",
                        "value": 728
                    },
                    {
                        "code": "Finland",
                        "value": 710
                    }
                ],
            type: req.params.type,
            searchTerm: req.params.searchTerm,
            template: template
		});
        
    }
};

module.exports = {
    searchTermController: searchTermController
};
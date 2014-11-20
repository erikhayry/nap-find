var config = require('../../config/config');

var homepageController = {
    // controller

    renderPage: function(req, res) {
        var template = 'homepage';
        
        res.render(template, {
        	metadata: {
        		title: ''
        	},
			title: '',
			layout: 'default',
            template: template,
            type: req.params.type,
            searchTerms: [
                {name: 'Burberry'},
                {name: 'Acne'},
                {name: 'Dresses'},
                {name: 'Givenchy'},
                {name: 'Blue'}
            ]          
		});
        
    }
};

module.exports = {
    homepageController: homepageController
};
var config = require('../../config/config');

var popularController = {
    // controller

    renderPage: function(req, res) {
        var template = 'popular';
        
        res.render(template, {
        	metadata: {
        		title: ''
        	},
			title: '',
			layout: 'default',
            template: template,
            type: req.params.type,
            searchTerms: 
[
[
"gucci", 
11
],
[
"burberry", 
7
],
[
"alexander mcqueen", 
7
],
[
"boots", 
5
],
[
"louboutin", 
5
],
[
"alexander", 
4
],
[
"nike", 
3
],
[
"alic", 
2
],
[
"acne", 
2
],
[
"prada", 
2
],
[
"marc by marc jacobs", 
2
],
[
"diane", 
2
]
]
                     
		});
        
    }
};

module.exports = {
    popularController: popularController
};
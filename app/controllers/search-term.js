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
            data: [{
                country: "United Kingdom",
                searches: 13298
            }, {
                country: "United States",
                searches: 2431
            }, {
                country: "Germany",
                searches: 1075
            }, {
                country: "South Korea",
                searches: 982
            }, {
                country: "China",
                searches: 935
            }, {
                country: "Switzerland",
                searches: 818
            }, {
                country: "Australia",
                searches: 678
            }, {
                country: "France",
                searches: 678
            }, {
                country: "Sweden",
                searches: 421
            }, {
                country: "Singapore",
                searches: 374
            }, {
                country: "Hong Kong",
                searches: 304
            }, {
                country: "Taiwan",
                searches: 304
            }, {
                country: "Spain",
                searches: 280
            }, {
                country: "Malaysia",
                searches: 257
            }, {
                country: "Canada",
                searches: 164
            }, {
                country: "Greece",
                searches: 164
            }, {
                country: "New Zealand",
                searches: 164
            }, {
                country: "Netherlands",
                searches: 140
            }, {
                country: "Poland",
                searches: 140
            }, {
                country: "Albania",
                searches: 93
            }, {
                country: "Austria",
                searches: 93
            }, {
                country: "Estonia",
                searches: 93
            }, {
                country: "Israel",
                searches: 93
            }, {
                country: "Italy",
                searches: 93
            }, {
                country: "Japan",
                searches: 93
            }, {
                country: "Russia",
                searches: 93
            }, {
                country: "Thailand",
                searches: 93
            }, {
                country: "Brazil",
                searches: 70
            }, {
                country: "Croatia",
                searches: 70
            }, {
                country: "Cyprus",
                searches: 70
            }, {
                country: "Finland",
                searches: 70
            }, {
                country: "Honduras",
                searches: 70
            }, {
                country: "Ireland",
                searches: 70
            }, {
                country: "Malta",
                searches: 70
            }, {
                country: "Azerbaijan",
                searches: 47
            }, {
                country: "Denmark",
                searches: 47
            }, {
                country: "Dominican Republic",
                searches: 47
            }, {
                country: "Guernsey",
                searches: 47
            }, {
                country: "India",
                searches: 47
            }, {
                country: "Kuwait",
                searches: 47
            }, {
                country: "Pakistan",
                searches: 47
            }, {
                country: "Serbia",
                searches: 47
            }, {
                country: "Kazakhstan",
                searches: 23
            }, {
                country: "Morocco",
                searches: 23
            }, {
                country: "Trinidad and Tobago",
                searches: 23
            }, {
                country: "Turkey",
                searches: 23
            }, {
                country: "Vietnam",
                searches: 23
            }],
            type: req.params.type,
            searchTerm: req.params.searchTerm,
            template: template
        });

    }
};

module.exports = {
    searchTermController: searchTermController
};
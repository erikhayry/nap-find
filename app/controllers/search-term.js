var config = require('../../config/config');
var async = require('async');
var dataRequest = require(config.ROOT + '/app/utilities/dataRequest');

var searchTermController = {
    // controller

    renderPage: function(req, res) {
        async.parallel({
            collectLocaleData: function(callback) {
                dataRequest.fetchData('http://10.5.17.226:3000/metrics/aggregation/search/location/'+ req.params.type + '?term=' + req.params.searchTerm, callback);
            },
            collectExtendedData: function(callback) {
                dataRequest.fetchData('http://10.5.17.226:3000/metrics/aggregation/search/extended/'+ req.params.type + '?term=' + req.params.searchTerm, callback);
            },                      
        }, function(error, results) {
        
        var channelList = calculateChannels(results.collectLocaleData.body);

        var template = 'search-term';
        res.render(template, {
            metadata: {
                title: ''
            },
            title: req.params.searchTerm,
            layout: 'default',
            data: results.collectLocaleData.body,
            extendedSearch: results.collectExtendedData.body,
            channelList:channelList,
            type: req.params.type,
            searchTerm: req.params.searchTerm,
            template: template
        });
    })
    }
};

function calculateChannels(localeData) {
    var am=0, intl=0, apac=0;
    localeData.forEach(function(locale){
        if (locale.channel==='am') {
            am = am + 1;
        } else if (locale.channel==='apac'){
            apac = apac + 1;
        } else {
            intl = intl + 1
        }
    })
    return {
        am: am,
        apac: apac,
        intl: intl
    }
}


module.exports = {
    searchTermController: searchTermController
};
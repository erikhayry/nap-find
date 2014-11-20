$(function () {
    var popularDataForChart;
    try {
        popularDataForChart = popularData || {};
    } catch(e) {}
    if (_.has(popularDataForChart, 'term')) {    
        
        // Initiate the chart
        $('.m-search-term-map-container').highcharts('Map', {

            title : {
                text : ''
            },

            mapNavigation: {
                enabled: false,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            colorAxis: {
            },

            series : [{
                data : popularDataForChart.data,
                mapData: Highcharts.maps["custom/world"],
                joinBy: ['name', 'country'],
                name: popularDataForChart.term
            }],

            legend: {
                enabled: false
            }
        });

    }
});
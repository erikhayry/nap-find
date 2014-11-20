$(function () {
    var popularDataForChart;
    try {
        popularDataForChart = popularData || {};
    } catch(e) {}
    if (_.has(popularDataForChart, 'team')) {    
        $('.m-popular-bar-chart-container').highcharts({
                title:{
                    text:''
                },        
                chart: {
                    type: 'column',
                    backgroundColor: "<%= bg %>"

                },
                xAxis: {
                    lineColor: '<%= mapBg %>',
                    categories: popularDataForChart.team,
                    tickWidth: 0
                },
                yAxis: {
                    lineColor: '<%= mapBg %>',
                    title: '',
                    gridLineColor: 'transparent',                   
                    lineColor: '<%= mapBg %>',
                    tickWidth: 0,
                    lineWidth: 1,
                    labels: {
                        enabled: false
                    }
                },
                tooltip: {
                    enabled: false
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                        }
                    }
                },
                series: [
                {
                    name: 'Points',
                    data: popularDataForChart.points,
                    color: "#33CCCC"
                }],
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                }
            });
    }
});
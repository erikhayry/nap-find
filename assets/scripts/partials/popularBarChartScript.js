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
                    backgroundColor: "#333"

                },
                xAxis: {
                    lineColor: '#666',
                    categories: popularDataForChart.team,
                    tickWidth: 0
                },
                yAxis: {
                    lineColor: '#666',
                    title: '',
                    gridLineColor: 'transparent',                   
                    lineColor: '#666',
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
                    color: "#ed3e87"
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
$(function () {
    var leaguePositionDifferenceForChart;
    try {
        leaguePositionDifferenceForChart = leaguePositionDifference || {};
    } catch(e) {}
    if (_.has(leaguePositionDifferenceForChart, 'team')) {    
        $('.m-league-position-difference-bar-chart-container').highcharts({
                title:{
                    text:''
                },        
                chart: {
                    type: 'column',
                    backgroundColor:'<%= graphBg %>'
                },
                xAxis: {
                    categories: leaguePositionDifferenceForChart.team
                },
                yAxis: {
                    title: ''
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
                    color: '<%= f11White %>',
                    data: leaguePositionDifferenceForChart.points
                }],
                credits: {
                    enabled: false
                }
            });
    }
});
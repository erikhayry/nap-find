
$(function () {
    var managerTransfersForChart;
    try {
        managerTransfersForChart = managerTransfers || {};
    } catch(e) {}
    if (_.has(managerTransfersForChart, 'transfersMade')) {
        var isLoaded = false;
        $('.m-manager-transfer-history-bar-chart-container').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
            if(isInView && !isLoaded && visiblePartY == 'both'){

                isLoaded = true;
                $('.m-manager-transfer-history-bar-chart-container').highcharts({
                        title:{
                            text:''
                        },        
                        chart: {
                            type: 'column',
                            backgroundColor:'<%= graphBg %>'
                        },
                        xAxis: {
                            categories: managerTransfersForChart.transfersMade
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
                            name: 'Transfer points',
                            color: '<%= f11Primary2 %>',
                            data: managerTransfersForChart.transfersCost
                        }, {
                            name: 'Points',
                            color: '<%= f11White %>',
                            data: managerTransfersForChart.points
                        }],
                        credits: {
                            enabled: false
                        }
                    });                
            }
        });

    }
});
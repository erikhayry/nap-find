$(function () {
    var managerHistoryForChart;
    try {
        managerHistoryForChart = managerHistory || {};
    } catch(e) {}
    if (_.has(managerHistoryForChart, 'gameWeek')) {
        var isLoaded = false;
        $('.m-manager-history-line-chart-container').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
            if(isInView && !isLoaded && visiblePartY == 'both'){

                isLoaded = true;
                $('.m-manager-history-line-chart-container').highcharts({
                    chart: {
                        backgroundColor:'<%= graphBg %>'
                    },
                	title:{
                		text:''
            		},
                    xAxis: {
                    	title: '',
                        categories: managerHistoryForChart.gameWeek,
            			labels: {
            	        	enabled: false
            	        }
                    },
                    yAxis: {
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '<%= f11Secondary3 %>'
                        }],
                  		title:''
                    },
                    tooltip: {
                        backgroundColor: '<%= f11Primary4 %>',
                        borderRadius: 10,
                        borderWidth: 0
                    },
                    legend: {

                    },
                    series: [{
                        name: 'Points',
                        color:'<%= f11Primary2 %>',
                        data: managerHistoryForChart.points
                    }, {
                        name: 'Average points',
                        color: '<%= f11Primary3 %>',
                        data: managerHistoryForChart.averagePoints
                    }],
            	  	credits: {
            	    	enabled: false
            	  	}
                });
            };
        });
    }
});


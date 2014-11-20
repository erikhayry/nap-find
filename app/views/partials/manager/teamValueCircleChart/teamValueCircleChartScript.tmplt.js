$(function () {

    var managerFinancesForChart;
    try {
        managerFinancesForChart = managerFinances || {};
    } catch(e) {}
    var isLoaded = false;
    if (_.has(managerFinancesForChart, 'initialTeamValue')) {

		$('#manager-finances-chart').easyPieChart({
			scaleColor: false,
			lineWidth: 10,
			lineCap: 'butt',
			barColor: '<%= f11Primary4 %>',
			trackColor: '<%= f11Primary1 %>' ,
			size: 250,
			animate: 1200
		});

		var value = parseFloat(managerFinancesForChart.currenTeamValue[0].replace('£', '').replace('m', ''));
		var circleMax = 150;
		var newValue = (value / circleMax) * 100;
		

		$('#manager-finances-chart').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
            if(isInView && !isLoaded && visiblePartY == 'both'){
				isLoaded = true;
  				$('#manager-finances-chart').data('easyPieChart').update(newValue);  			
			}
  		});
    };
});
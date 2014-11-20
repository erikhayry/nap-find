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
                min: popularDataForChart.data[popularDataForChart.data.length-1].value,
                max: popularDataForChart.data[0].value,
                type: 'linear',
                minColor: '#33CCCC',
                maxColor: '#6699cc'
            },

            series : [{
                data : popularDataForChart.data,
                mapData: Highcharts.maps["custom/world"],
                joinBy: ['name', 'country'],
                name: popularDataForChart.term
            }],

            tooltip: {
                useHTML: true,
                headerFormat: '',
                pointFormat: '<span class="m-search-term-map-tooltip">{point.country}<br/>{point.value}</span>',
            },

            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },            
        });
    }

    var $search = $('#search'),
        query = '';

    $search.focusin(function(){
        console.log('foxus')
        query =  $(this).val();
        $(this).val('').addClass('is-focus');
    })

    $search.focusout(function(){
        console.log('focus oy')
        $(this).removeClass('is-focus');
        if(!$(this).val() || $(this).val() === ''){
            $(this).val(query)
        }
    })

    $search.keyup(function(e){
        if(e.keyCode == 13 && ($(this).val() || $(this).val() !== ' ')){        
             window.location = window.location.origin + '/search/term/' + $(this).val();   
        }
    });

});
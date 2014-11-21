$(function() {
    var popularDataForChart;
    try {
        popularDataForChart = popularData || {};
    } catch (e) {}
    if (_.has(popularDataForChart, 'term')) {

        // Initiate the chart
        $('.m-search-term-map-container').highcharts('Map', {

            title: {
                text: ''
            },

            mapNavigation: {
                enabled: false,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            colorAxis: {
                min: popularDataForChart.data[popularDataForChart.data.length - 1].value,
                max: popularDataForChart.data[0].value,
                type: 'linear',
                stops: [
                    [0.005, '#fde9f1'],
                    [0.01, '#fde9f1'],
                    [0.015, '#fbdae8'],
                    [0.020, '#facade'],
                    [0.025, '#f9bad4'],
                    [0.030, '#f7abcb'],
                    [0.035, '#f69bc1'],
                    [0.04, '#f48cb7'],
                    [0.045, '#f37cae'],
                    [0.05, '#f16da4'],
                    [0.055, '#f05d9a'],
                    [0.06, '#ee4e91'],
                    [0.065, '#ed3e87'],
                    [0.07, '#eb2f7d'],
                    [0.075, '#ea1f74'],
                    [0.08, '#e3156b'],
                    [0.085, '#d31464'],
                    [0.09, '#c4125c'],
                    [0.095, '#b41155'],
                    [0.01, '#a5104e'],
                    [0.1, '#950e46'],
                    [0.2, '#860d3f'],
                    [0.3, '#760b38'],
                    [0.4, '#670a30'],
                    [1, '#570829']
                ]
            },

            series: [{
                data: popularDataForChart.data,
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

        $('.m-search-term-map-pie-channels').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotShadow: false
            },
            title: {
                text: ''
            },

            plotOptions: {
                pie: {
                    colors: ['#f9bad4', '#eb2f7d', '#670a30']
                }
            },

            tooltip: {
                useHTML: true,
                headerFormat: '',
                pointFormat: '<span class="m-search-term-map-tooltip">{point.percentage:.1f}%</span>',
            },

            series: [{
                type: 'pie',
                name: '',
                data: [
                    ['INTL', popularDataForChart.channelList.intl],
                    ['AM', popularDataForChart.channelList.am],
                    ['APAC', popularDataForChart.channelList.apac]
                ]
            }],
            credits: {
                enabled: false
            },
        });

        if (popularDataForChart.breakdown.length > 1) {
            $('.m-search-term-map-pie-breakdown').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotShadow: false
                },
                title: {
                    text: ''
                },

                plotOptions: {
                    pie: {
                        colors: [
                            '#f9bad4',
                            '#f37cae',
                            '#f05d9a',
                            '#eb2f7d',
                            '#e3156b',
                            '#b41155',
                            '#570829'
                        ],
                        dataLabels: {
                            enabled: true,
                            color: '#000000',
                            connectorColor: '#000000',
                            formatter: function() {
                                return this.point.name;
                            },
                            style: {
                                width: '70px'
                            }
                        }
                    }
                },

                tooltip: {
                    useHTML: true,
                    headerFormat: '',
                    pointFormat: '<span class="m-search-term-map-tooltip">{point.percentage:.1f}%</span>',
                },

                series: [{
                    type: 'pie',
                    name: '',
                    data: popularDataForChart.breakdown.splice(1)
                }],
                credits: {
                    enabled: false
                },
            });
        }

    }

    var $search = $('#search'),
        query = '';

    $search.focusin(function() {
        query = $(this).val();
        $(this).val('').addClass('is-focus');
    })

    $search.focusout(function() {
        $(this).removeClass('is-focus');
        if (!$(this).val() || $(this).val() === '') {
            $(this).val(query)
        }
    })

    $search.keyup(function(e) {
        if (e.keyCode == 13 && ($(this).val() || $(this).val() !== ' ')) {
            window.location = window.location.origin + '/search/term/' + $(this).val() + '/yesterday/';
        }
    });

});
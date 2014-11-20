$(function () {

    var now = moment(),
    then = moment('11:30','HH:mm').day(6),
    // get the difference from now to then in ms
    duration = then.diff(now, 'milliseconds', true);

    var interval = 1000;

    setInterval(function(){
      duration = moment.duration(duration - interval, 'milliseconds');
        $('.m-countdown-timer').text(duration.days()+ ":" + duration.hours() + ":" + duration.minutes())
    }, interval);
});
function countDownTimer(date, domId) {
    var end = new Date(date);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(domId).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('day_container').innerHTML = days + 'days ';
        document.getElementById('hour_container').innerHTML = hours + 'hrs ';
        document.getElementById('min_container').innerHTML = minutes + 'mins ';
        document.getElementById('sec_container').innerHTML = seconds + 'secs';
    }

    timer = setInterval(showRemaining, 1000);
}

document.addEventListener("DOMContentLoaded", function (event) {
    var title =  "HIU | " + (new Date()).getFullYear();
    document.title = title;
    document.getElementById('first_title_item').innerText = title;
    countDownTimer('04/23/2022 00:01 AM','container_countdown');
});
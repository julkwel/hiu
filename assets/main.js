function countDownTimer(date, domId) {
	var end = new Date(date);

	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;

	function addZero(num) {
		return num < 10 ? '0' + num : num;
	}

	function showRemaining() {
		var now = new Date();
		var distance = end - now;
		if (distance < 0) {
			clearInterval(timer);
			document.getElementById(domId).innerHTML = 'EXPIRED!';

			return;
		} else if (distance <= _day && distance > 0) {
			var count_down_items = document.getElementsByClassName('count_down_item');
			for (var i = 0; i < count_down_items.length; i++) {
				items[i].classList.add('danger');
			}
		}
		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		document.getElementById('day_container').innerHTML =
			addZero(days) + 'days ';
		document.getElementById('hour_container').innerHTML =
			addZero(hours) + 'hrs ';
		document.getElementById('min_container').innerHTML =
			addZero(minutes) + 'mins ';
		document.getElementById('sec_container').innerHTML =
			addZero(seconds) + 'secs';
	}

	timer = setInterval(showRemaining, 1000);
}

document.addEventListener('DOMContentLoaded', function (event) {
	var title = 'HIU | ' + new Date().getFullYear();
	document.title = title;
	document.getElementById('first_title_item').innerText = title;
	countDownTimer('04/23/2022 00:01 AM', 'countdown_container');
});

let backgroundActiveIdx = 0; // load the first image on load
const images = [
	'assets/images/hiu1.jpg',
	'assets/images/hiu2.jpg',
	'assets/images/hiu3.jpg',
	'assets/images/hiu4.jpg',
	'assets/images/hiu5.jpg',
];

function changeBackground() {
	document.body.style.background = `url(${images[backgroundActiveIdx]}) 0% 0% / cover no-repeat`;
	backgroundActiveIdx = (backgroundActiveIdx + 1) % images.length;
}

document.body.style.background = `url(${images[0]}) 0% 0% / cover no-repeat`;
setInterval(changeBackground, 5000);

//preloader
const preloader = document.getElementById('preloader');
const main_container = document.querySelector('.main_container');
console.log(main_container);
window.addEventListener('load', e => {
	if (e.isTrusted) {
		preloader.style.display = 'none';
	} else {
		main_container.style.display = 'none';
	}
});

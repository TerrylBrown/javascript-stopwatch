(function() {
	'use strict';

	var $startStopwatch = document.getElementById('startStopwatch');
	var $stopStopwatch = document.getElementById('stopStopwatch');
	var $resetStopwatch = document.getElementById('resetStopwatch');

	var $minutes = document.getElementById('minutes');
	var $seconds = document.getElementById('seconds');
	var $milliseconds = document.getElementById('milliseconds');

	var minutes = 0;
	var seconds = 0;
	var milliseconds = 0;

	var isRunning = false;

	function start() {
		isRunning = true;
		runStopwatch();
	}

	function stop() {
		isRunning = false;
	}

	function reset() {
		stop();
		minutes = 0;
		seconds = 0;
		milliseconds = 0;
		$minutes.innerHTML = '00';
		$seconds.innerHTML = '00';
		$milliseconds.innerHTML = '00';
	}

	function runStopwatch() {
		var timer = setInterval(function() {
			if (isRunning) {
				milliseconds++;						
				if (milliseconds === 100) {						
					// reset milliseconds
					milliseconds = 0;
					$milliseconds.innerHTML = 0;
					if (seconds === 59) {							
						// reset second
						seconds = 0;
						$seconds.innerHTML = '00';
						// add to minute						
						minutes++;
						$minutes.innerHTML = addTime(minutes);
					} else {
						// add to seconds
						seconds++;
						$seconds.innerHTML = addTime(seconds);												
					}	
				} else {
					$milliseconds.innerHTML = addTime(milliseconds);
				}
			} else {
				clearInterval(timer);
			}
		}, 10);		
	}

	function addTime(time) {
		if (time < 10) {
			return '0' + time;
		}
		return time;
	}

	$startStopwatch.addEventListener('click', start);
	$stopStopwatch.addEventListener('click', stop);
	$resetStopwatch.addEventListener('click', reset);

})();

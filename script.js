let timerInterval;
let minutes = 25;
let seconds = 60;
let isRunning = false;

const startPauseButton = document.getElementById("startPauseButton");

function updateDisplay() {
  document.getElementById("seconds").innerHTML = String(seconds).padStart(
    2,
    "0"
  );
  document.getElementById("minutes").innerHTML = String(minutes).padStart(
    2,
    "0"
  );
}

function togglePomodoro() {
  if (isRunning) {
    clearInterval(timerInterval);
    startPauseButton.innerHTML = "Start";
  } else {
    timerInterval = setInterval(() => {
      seconds -= 1;
      if (minutes == 25) {
        minutes -= 1;
      }

      if (seconds === 0) {
        seconds = 60;
        minutes -= 1;
      }
      updateDisplay();
    }, 1000);
    startPauseButton.innerHTML = "Pause";
  }
  isRunning = !isRunning;
}

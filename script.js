let timerInterval;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const startPauseButton = document.getElementById("startPauseButton");

function togglePomodoro() {
  if (isRunning) {
    clearInterval(timerInterval);
    startPauseButton.innerHTML = "Start";
  } else {
    timerInterval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timerInterval);
          alert("Pomodoro session completed! Take a break!");
          return;
        } else {
          minutes -= 1;
          seconds = 59;
        }
      } else {
        seconds -= 1;
      }
      updateDisplay();
    }, 1000);

    startPauseButton.innerHTML = "Pause";
  }

  isRunning = !isRunning;
}

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

function pomodoroMode() {
  activateButton("pomodoro");
  resetPomodoro();
  document.body.style.background = "#9f4e4e";
  startPauseButton.style.color = "#9f4e4e";
  minutes = 25;
  updateDisplay();
}

function shortbreakMode() {
  activateButton("shortbreak");
  resetPomodoro();
  document.body.style.background = "#418348";
  startPauseButton.style.color = "#418348";
  minutes = 5;
  updateDisplay();
}

function longbreakMode() {
  activateButton("longbreak");
  resetPomodoro();
  document.body.style.background = "#355c7d";
  startPauseButton.style.color = "#355c7d";
  minutes = 15;
  updateDisplay();
}

function resetPomodoro() {
  clearInterval(timerInterval); // Stop any running interval
  minutes = 25;
  seconds = 0;
  isRunning = false;
  document.getElementById("startPauseButton").innerHTML = "Start";
  updateDisplay();
}
function activateButton(buttonId) {
  const buttons = document.querySelectorAll(".options");
  buttons.forEach((button) => button.classList.remove("active"));

  const selectedButton = document.getElementById(buttonId);
  selectedButton.classList.add("active");
}
activateButton("pomodoro");
updateDisplay();

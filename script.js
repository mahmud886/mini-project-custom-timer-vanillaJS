const timerElement = document.querySelector('#timer');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const setCustomTimeBtn = document.querySelector('#setCustomTime');
const customMinutesInput = document.querySelector('#customMinutes');

let interval;
let timeLeft = 1500; // default time in seconds

// Update Timer Function
function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  timerElement.innerHTML = formattedTime;
}

// Start Timer Function
function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert('Times Up!');
      timeLeft = 1500; // reset to default time
      updateTimer();
    }
  }, 1000);
}

// Stop Timer Function
function stopTimer() {
  clearInterval(interval);
}

// Reset Timer Function
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500; // reset to default time
  updateTimer();
}

// Set Custom Time Function
function setCustomTime() {
  const userInputMinutes = parseInt(customMinutesInput.value, 10) || 0;
  timeLeft = userInputMinutes * 60; // convert minutes to seconds
  updateTimer();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Add event listener for setting custom time
setCustomTimeBtn.addEventListener('click', setCustomTime);

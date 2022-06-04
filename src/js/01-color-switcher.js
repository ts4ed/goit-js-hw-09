const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
const DELAY_TIME = 1000;
let timerId = null;
let startedChange = false;

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

function onStart() {
  if (!startedChange) {
    timerId = setInterval(getRandomHexColor, DELAY_TIME);
    startedChange = true;
  }
  return;
}

function onStop() {
  clearInterval(timerId);
}

function getRandomHexColor() {
  return (bodyEl.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`);
}

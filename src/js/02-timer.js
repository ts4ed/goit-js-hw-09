import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';
const startBtn = document.querySelector('button[type="button"]');
const ONE_SECOND = 1000;
const date = new Date();
const refs = {
  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('.value[data-seconds]'),
};
let timerOff = null;
let startedChange = false;
let timeOff = null;
let deltaTime = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < date) {
      Notify.warning('Please choose a date in the future');
      startBtn.disabled = true;
      return;
    }
    startBtn.disabled = false;
    timerOff = selectedDates[0].getTime();
  },
};
function starts() {
  return timer.start();
}
const timer = {
  start() {
    if (!startedChange) {
      timeOff = timerOff - options.defaultDate;
      const timeId = setInterval(() => {
        deltaTime = timeOff -= ONE_SECOND;
        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        (refs.days.textContent = days),
          (refs.hours.textContent = hours),
          (refs.minutes.textContent = minutes),
          (refs.seconds.textContent = seconds);
        if (timeOff < 1000) {
          clearInterval(timeId);
          Notify.failure('Время закончилось(((');
          return;
        }
      }, ONE_SECOND);
      startedChange = true;
    }

    return;
  },
};

startBtn.disabled = true;
flatpickr('#datetime-picker', options);
startBtn.addEventListener('click', starts);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
function pad(value) {
  return String(value).padStart(2, '0');
}

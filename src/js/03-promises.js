import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form'),
};
refs.delay.addEventListener('input', onInput);
refs.step.addEventListener('input', onInput);
refs.amount.addEventListener('input', onInput);
refs.form.addEventListener('submit', onSubmit);
let flag = true;
let counter = 0;
let delayEL = 0;
let stepEl = 0;
let amountEl = 0;

function onInput() {
  (delayEL = Number(refs.delay.value)),
    (stepEl = Number(refs.step.value)),
    (amountEl = Number(refs.amount.value));
}

function onSubmit(event) {
  event.preventDefault();

  const timerId = setInterval(() => {
    flagOn();
    createPromise(counter + 1, delayEL)
      .then(result => console.log(result))
      .catch(error => console.log(error));
    flag = false;
    counter += 1;
    if (counter === amountEl) {
      clearInterval(timerId);
      counter = 0;
      flag = true;
      delayEL = 0;
      return;
    }
  });
}

function createPromise(position, delay) {
  return new Promise(() => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

function flagOn() {
  if (flag === false) {
    delayEL = stepEl + delayEL;
  }
}


// Найти способ увеличивать каждый следующий promise + step
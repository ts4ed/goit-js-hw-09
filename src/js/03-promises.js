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

  for (let i = 1; i <= amountEl; i += 1) {
    createPromise(i, delayEL)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delayEL += stepEl;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import interfaceStyles from './functions/task-3/interface';

const refs = {
  labelRefs: document.querySelectorAll('label'),
  inputRefs: document.querySelectorAll('input'),
  btnRef: document.querySelector('button'),
  formRef: document.querySelector('form'),
};

let formData = {};

interfaceStyles(refs);

refs.formRef.addEventListener('submit', onBtnClick);
refs.formRef.addEventListener('input', onInputValue);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onInputValue(e) {
  formData.delay = Number(e.currentTarget.elements.delay.value);
  formData.step = Number(e.currentTarget.elements.step.value);
  formData.amount = Number(e.currentTarget.elements.amount.value);

  anableBtn();
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

function disableBtn() {
  refs.btnRef.setAttribute('disabled', 'disabled');
}
function anableBtn() {
  refs.btnRef.removeAttribute('disabled');
}

function onBtnClick(e) {
  e.preventDefault();
  disableBtn();
  const { delay, amount, step } = formData;
  for (let i = 0; i < amount; i += 1) {
    console.log(i);
    const PromiceDelay = step * i + delay;
    createPromise(i + 1, PromiceDelay)
      .then(onSuccess)
      .catch(onError);
  }
}

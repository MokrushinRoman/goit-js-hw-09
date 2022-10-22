import { getRandomHexColor } from './functions/task-1/get-random-color';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
  btnContainer: document.querySelector('div'),
};
// Inactive buttons

const inactivationFunctions = {
  onInactiveStopBtn() {
    refs.stopBtn.setAttribute('disabled', 'disabled');
    // refs.stopBtn.style.opacity = '0.3';
    // refs.stopBtn.style.pointerEvents = 'none';
  },
  onInactiveStartBtn() {
    refs.startBtn.setAttribute('disabled', 'disabled');
    // refs.startBtn.style.opacity = '0.3';
    // refs.startBtn.style.pointerEvents = 'none';
  },
};

// body color
function onChangeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

let getIntervalId = null;

// buttons container styles
refs.btnContainer.style.position = 'absolute';
refs.btnContainer.style.top = '50%';
refs.btnContainer.style.left = '50%';
refs.btnContainer.style.transform = 'translate(-50%,-50%) scale(3)';

inactivationFunctions.onInactiveStopBtn();

// ACTIONS
refs.stopBtn.addEventListener('click', onStopClick);
refs.startBtn.addEventListener('click', onStartClick);

function onStartClick() {
  console.log('Start click');

  onChangeColor();

  getIntervalId = setInterval(() => {
    onChangeColor();
  }, 1000);

  inactivationFunctions.onInactiveStartBtn();

  refs.stopBtn.removeAttribute('disabled');
}

function onStopClick() {
  console.log('Stop click');

  clearInterval(getIntervalId);

  inactivationFunctions.onInactiveStopBtn();

  refs.startBtn.removeAttribute('disabled');
}

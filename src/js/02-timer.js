import { failureMessage, finishMessage } from './functions/task-2/notify';
import { anableBtn, disableBtn } from './functions/task-2/disabledBtn';
import { flatpickrFunc, timerDeadline } from './functions/task-2/flatpickr';
// import Timer from './functions//task-2/timer';
import { timer } from './functions/task-2/timer';
import clockFace from './functions/task-2/clock-face';
// get refs : input, btn, timer
const refs = {
  startBtnRef: document.querySelector('[data-start]'),
  daysRef: document.querySelector('[data-days]'),
  hoursRef: document.querySelector('[data-hours]'),
  minutesRef: document.querySelector('[data-minutes]'),
  secondsRef: document.querySelector('[data-seconds]'),
  timerValEls: document.querySelectorAll('.value'),
  timerRef: document.querySelector('.timer'),
};

clockFace(refs);

disableBtn(refs.startBtnRef);

// ---------------------- flatpikr Part
flatpickrFunc(
  '#datetime-picker',
  anableBtn,
  disableBtn,
  refs.startBtnRef,
  failureMessage
);

// ---------------------- timer part
/*
const timer = new Timer({
  onTick: timerInterface,
  disabled: disableBtn,
  message: finishMessage,
  deadline: timerDeadline,
});

refs.startBtnRef.addEventListener('click', timer.start.bind(timer));
*/

refs.startBtnRef.addEventListener('click', () => {
  timer.getRefs(
    timerInterface(
      refs.daysRef,
      refs.hoursRef,
      refs.minutesRef,
      refs.secondsRef
    )
  );

  timer.start(timerDeadline, finishMessage, disableBtn, refs.startBtnRef);
});

// ---------------------- interface interactions
function timerInterface(days, hours, minutes, seconds) {
  return { days, hours, minutes, seconds };
}

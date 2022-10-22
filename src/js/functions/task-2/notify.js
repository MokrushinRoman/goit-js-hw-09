import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function failureMessage() {
  Notify.failure('Please choose a date in the future');
}

export function finishMessage() {
  Notify.info('Time is over');
}

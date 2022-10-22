import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

export let timerDeadline = null;

export function flatpickrFunc(id, anabled, disabled, selector, message) {
  flatpickr(id, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const diffInMs = selectedDates[0].getTime() - Date.now();

      if (diffInMs <= 0) {
        message();
        disabled(selector);
      } else {
        timerDeadline = selectedDates[0].getTime();
        anabled(selector);
        console.log('timerDeadline', timerDeadline);
      }
    },
  });
}

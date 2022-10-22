// не принимает только изначальное значение timerDeadline , не меняется значение. Помогите решить вопрос (в классе)
/*export default class Timer {

  constructor({ onTick, disabled, message, deadline }) {
    this.intervalId = null;
    this.onTick = onTick;
    this.disabled = disabled;
    this.message = message;
    this.deadline = deadline;
  }

  start(e) {
    this.disabled(e.target);
    console.log(this.deadline);

    const diff = this.deadline - Date.now();
    const convertedDiff = this.convertMs(diff);

    this.onTick(convertedDiff);
    // Object.entries(convertedDiff).forEach(([name, value]) => {
    //   this.refs[name].textContent = this.addLeadingZero(value);
    // });

    this.intervalId = setInterval(() => {
      const diff = this.deadline - Date.now();
      const convertedDiff = this.convertMs(diff);

      this.onTick(convertedDiff);
      // Object.entries(convertedDiff).forEach(([name, value]) => {
      //   this.refs[name].textContent = this.addLeadingZero(value);
      // });

      if (diff < 1000) {
        this.message();
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = this.addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = this.addLeadingZero(
      Math.floor(((ms % day) % hour) / minute)
    );
    // Remaining seconds
    const seconds = this.addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  }

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}
*/

export default timer = {
  intervalId: null,
  refs: {},

  start(deadline, message, disabled, btn) {
    disabled(btn);

    const diff = deadline - Date.now();
    const convertedDiff = this.convertMs(diff);

    Object.entries(convertedDiff).forEach(([name, value]) => {
      this.refs[name].textContent = this.addLeadingZero(value);
    });

    this.intervalId = setInterval(() => {
      const diff = deadline - Date.now();
      const convertedDiff = this.convertMs(diff);

      Object.entries(convertedDiff).forEach(([name, value]) => {
        this.refs[name].textContent = this.addLeadingZero(value);
      });

      if (diff < 1000) {
        message();
        clearInterval(this.intervalId);
      }
    }, 1000);
  },

  getRefs({ days, hours, minutes, seconds }) {
    this.refs.days = days;
    this.refs.hours = hours;
    this.refs.minutes = minutes;
    this.refs.seconds = seconds;
  },

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  },
};

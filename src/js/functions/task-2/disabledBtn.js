export function disableBtn(selector) {
  selector.setAttribute('disabled', 'disabled');
}

export function anableBtn(selector) {
  selector.removeAttribute('disabled');
}

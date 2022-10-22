export default function clockFace(refs) {
  // timer list
  refs.timerRef.style.display = 'flex';
  refs.timerRef.style.position = 'absolute';
  refs.timerRef.style.left = '50%';
  refs.timerRef.style.top = '50%';
  refs.timerRef.style.transform = 'translate(-50%, -50%) scale(2)';

  // timer items
  const timerItems = refs.timerRef.children;
  Array.from(timerItems).map(item => {
    item.style.display = 'flex';
    item.style.flexDirection = 'column';
    item.style.alignItems = 'center';
    item.style.margin = '0 5px 0 5px';
  });

  // timer value
  Array.from(refs.timerValEls).map(item => {
    item.style.transform = 'scale(1.7)';
  });
}

export default function interfaceStyles(refs) {
  // lables
  const lables = refs.labelRefs;
  Array.from(lables).map(item => {
    item.style.display = 'inline-flex';
    item.style.flexDirection = 'column';
    item.style.marginRight = '10px';
  });

  // inputs
  const inputs = refs.inputRefs;
  Array.from(inputs).map(item => {
    item.style.padding = '5px';
  });

  // btn
  refs.btnRef.style.padding = '10px';

  // form
  refs.formRef.style.display = 'flex';
  refs.formRef.style.alignItems = 'end';
}

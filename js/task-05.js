'use strict';

const inputEl = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  output.textContent = event.currentTarget.value;

  if (inputEl.value === '') {
    output.innerHTML = 'Anonymous';
  }
}

// const refs = {
//   inputRef: document.querySelector('#name-input'),
//   outputRef: document.querySelector('#name-output'),
// };

// refs.inputRef.addEventListener('input', onInputChange);

// function onInputChange(event) {
//   refs.outputRef.textContent = event.currentTarget.value.trim();
//   if (!event.currentTarget.value.trim()) {
//     refs.outputRef.textContent = 'Anonymous';
//   }
// }

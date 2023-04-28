const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', OnInputValid);

function OnInputValid(event) {
  if (inputEl.value.length === 6) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}

// TAMBIEN PUEDE SER

// const refs = {
//   inputRef: document.querySelector('#validation-input'),
// };

// const dataLength = Number.parseInt(refs.inputRef.dataset.length);

// function onInputRemoveFocus(event) {
//   if (event.currentTarget.value.length === dataLength) {
//     event.currentTarget.classList.remove('invalid');
//     event.currentTarget.classList.add('valid');
//   } else if (!event.currentTarget.value) {
//     event.currentTarget.classList.remove('valid');
//     event.currentTarget.classList.remove('invalid');
//   } else {
//     event.currentTarget.classList.remove('valid');
//     event.currentTarget.classList.add('invalid');
//   }
// }

// refs.inputRef.addEventListener('blur', onInputRemoveFocus);

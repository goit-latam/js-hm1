const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', changeOfSize);

function changeOfSize(event) {
  textEl.style.fontSize = inputEl.value + 'px';
}

// COMO OPCION TAMBIEN PUEDE SER

// const refs = {
//   sizeControlRef: document.querySelector('#font-size-control'),
//   textRef: document.querySelector('#text'),
// };

// let defaultTextSize = '16';
// refs.sizeControlRef.value = defaultTextSize;

// function onInputChangeFontSize(event) {
//   const currentSize = event.currentTarget.value;

//   refs.textRef.style.fontSize = `${currentSize}px`;
// }

// refs.sizeControlRef.addEventListener('input', onInputChangeFontSize);

const bodyEl = document.querySelector('body');
const changeOfColor = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let currentColor = null;

changeOfColor.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  event.preventDefault();
  currentColor = getRandomHexColor();

  bodyEl.style.backgroundColor = currentColor;
  colorEl.textContent = currentColor;
}

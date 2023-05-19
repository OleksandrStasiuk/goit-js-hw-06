function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyBgColor = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

buttonChangeColor.addEventListener('click', function () {
  const color = getRandomHexColor();
  bodyBgColor.style.backgroundColor = color;
  spanColor.textContent = color;
});

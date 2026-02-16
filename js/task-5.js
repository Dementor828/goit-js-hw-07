const colorHtml = document.querySelector('.color')
const changeColorHtml = document.querySelector('.change-color')
const bodyHtml = document.querySelector('body')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



changeColorHtml.addEventListener('click', () => {
  const newColor = getRandomHexColor()
  colorHtml.textContent = newColor
  bodyHtml.style.background = newColor
})
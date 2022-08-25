function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".widget > button");
console.log(buttonEl.textContent);

const colorNameEl = document.querySelector(".color");
// const colorNameEl = document.querySelector(".widget > p > span");
console.log(colorNameEl.textContent);

function onButtonClickChangeColor(event) {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  colorNameEl.textContent = `${getRandomHexColor()}`;
  console.log(colorNameEl.textContent);
}

buttonEl.addEventListener("click", onButtonClickChangeColor);

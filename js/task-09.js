function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".widget > button");
console.log(buttonEl.textContent);

const colorNameEl = document.querySelector(".color");
// const colorNameEl = document.querySelector(".widget > p > span");
console.log(colorNameEl.textContent);

function onButtonClickChangeColor(event) {
  colorNameEl.textContent = `${getRandomHexColor()}`;
  document.body.style.backgroundColor = `${colorNameEl.textContent}`;

  console.log("text color", colorNameEl.textContent);
  console.log("backgroundColor", document.body.style.backgroundColor);
}

buttonEl.addEventListener("click", onButtonClickChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector("[data-create]");
console.log(createBtnEl.textContent);

const destroyBtnEl = document.querySelector("[data-destroy]");
console.log(destroyBtnEl.textContent);

const collectionContainerEl = document.querySelector("#boxes");
console.log(collectionContainerEl);

const inputEl = document.querySelector("#controls > input");
console.log(inputEl.value);

createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);
let boxes = [];

// СОЗДАНИЯ ЕЛЕМЕНТОВ
function createBoxes(event) {
  event.preventDefault();

  for (let i = 1; i <= inputEl.value; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    divEl.style.width = `calc(30px + (10px * ${i} - 10px))`;
    divEl.style.height = `calc(30px + (10px * ${i} - 10px))`;
    boxes.push(divEl);
  }
  console.log(boxes);
  collectionContainerEl.append(...boxes);
}

// УДАЛЕНИЕ ЕЛЕМЕНТОВ
function destroyBoxes(e) {
  e.preventDefault();
  for (let i = 1; i <= inputEl.value; i += 1) {
    const divElement = collectionContainerEl.firstElementChild;
    console.log(divElement);
    divElement.remove();
  }
  boxes = [];
  inputEl.value = 0;
}

// addEventListener НА input
// inputEl.addEventListener("input", onFindAmount);
// inputEl.addEventListener("input", (evt) => {
//   amount = Number(evt.target.value);
//   console.log(amount);
// function onFindAmount(event, amount) {
//   amount = Number(event.target.value);
//   return console.log(amount);
// }

const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

console.log(inputEl, nameEl);

function onInputChange(event) {
  event.currentTarget.value === "" || event.currentTarget.value === " "
    ? (nameEl.textContent = "Anonymous")
    : (nameEl.textContent = event.currentTarget.value);

  console.log(event.currentTarget.value); // Имя в поле input
  console.log(event.currentTarget); //   <input type="text" id="name-input" placeholder="Please enter your name">

  //   Отменить настройки по умолчанию, в частности относительно перезагрузки страницы
  event.preventDefault();
}

inputEl.addEventListener("input", onInputChange);

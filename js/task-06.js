const inputEl = document.querySelector("#validation-input");
console.log(inputEl);

inputEl.addEventListener("blur", onCorrectLength);

// Проверка атрибута inputEl - data-length
console.log(inputEl.hasAttribute("data-length"));

// console.log(inputEl.getAttribute("data-length"));
// inputEl.style.borderColor = "#f44336";

function onCorrectLength(event) {
  const inputMaxLength = Number(inputEl.getAttribute("data-length"));
  console.log("inputMaxLength", inputMaxLength);
  console.log("typeof inputMaxLength", typeof inputMaxLength);

  const inputLength = event.target.value.length;
  console.log("inputLength", inputLength);
  console.log("typeof inputLength", typeof inputLength);

  //   ТЕЛО ФУНКЦИИ - серый на 1-5, зеленый на 6, красный > 6
  if (inputLength < inputMaxLength) {
    inputEl.className = "";
  }
  if (inputLength === inputMaxLength) {
    inputEl.className = "valid";
  }
  if (inputLength > inputMaxLength) {
    inputEl.className = "invalid";
  }

  // ТЕЛО ФУНКЦИИ - красный на 1-5 и на > 6, зеленый на 6
  //   inputLength === inputMaxLength
  //     ? (inputEl.className = "valid")
  //     : (inputEl.className = "invalid");
  //
}

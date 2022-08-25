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

  const inputLength = event.currentTarget.value.length;
  console.log("inputLength", inputLength);
  console.log("typeof inputLength", typeof inputLength);

  //   ТЕЛО ФУНКЦИИ - вариант 1
  inputLength <= inputMaxLength
    ? (inputEl.className = "valid")
    : (inputEl.className = "invalid");

  // ТЕЛО ФУНКЦИИ - вариант 2
  //   if (inputLength <= inputMaxLength) {
  //     inputEl.className = "valid";
  //   } else {
  //     inputEl.className = "invalid";
  //   }
}

const inputEl = document.querySelector("#font-size-control");
console.log(inputEl.value);

const textRangeEl = document.querySelector("#text");
console.log(textRangeEl.textContent);
console.log(textRangeEl.FontSize);

inputEl.addEventListener("input", onMeaningRange);

function onMeaningRange(event) {
  console.log(event.currentTarget.value);
  console.log(typeof Number(event.target.value));

  textRangeEl.style.fontSize = `${Number(event.target.value)}px`;
}

// Для работы с ползунком введены следующие атрибуты:

// max — максимальное значение элемента (соответствует крайнее правое положение ползунка). Число.
// min — минимальное значение элемента (соответствует крайнее левое положение ползунка). Число.
// step — шаг ползунка. Число.
// Пример применения атрибутов, представлен ниже.

// <input type="range" min="100" max="200" step="2">

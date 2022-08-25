const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainerEl = document.querySelector("#ingredients");
ingredientsContainerEl.style.listStyle = "none";
ingredientsContainerEl.style.paddingLeft = 0;
console.log(ingredientsContainerEl);

// ПЕРВЫЙ ВАРИАНТ - через ФУНКЦИЮ и ИТЕРАЦИЮ I
const ingredientsArray = [];
const makeIngredients = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = array[i];
    ingredientEl.classList.add("item");

    ingredientsArray.push(ingredientEl);
  }
  return ingredientsArray;
};

makeIngredients(ingredients);
console.log(...ingredientsArray);

// ВТОРОЙ ВАРИАНТ - через МЕТОД MAP
// const ingredientsElements = ingredients.map((ingredient) => {
//   const ingredientEl = document.createElement("li");
//   ingredientEl.textContent = ingredient;
//   ingredientEl.classList.add("item");

//   return ingredientEl;
// });
// console.log(ingredientsElements);

// ДОБАВЛЕНИЕ ЕЛЕМЕНТОВ НА СТРАНИЦУ
ingredientsContainerEl.append(...ingredientsArray);

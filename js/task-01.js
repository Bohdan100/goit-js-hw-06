const generalListEl = document.querySelector("#categories");
// console.log(generalListEl);

// Найти количество категорий
const allCategories = document.querySelectorAll(".item");
// console.log(allCategories);
const numbersOfCategories = [...allCategories].length;
console.log("Numbers of categories:", numbersOfCategories);

// Найти НАЗВАНИЕ КАТЕГОРИИ и КОЛИЧЕСТВО ЕЛЕМЕНТОВ в категории
const findCatrgories = function (categories) {
  for (const categorie of categories) {
    // название категории
    const categoryName = categorie.firstElementChild.textContent;
    // console.log(categorie);
    console.log("Category", categoryName);

    // количество елементов в категории
    const elements = categorie.lastElementChild.children.length;
    console.log("elements", elements);

    // название елементов в категории
    const elementsNames = categorie.lastElementChild.textContent;
    console.log(elementsNames);
  }
};

findCatrgories(allCategories);

// КОЛИЧЕСТВО ЕЛЕМЕНТОВ - ПОИСК ОТДЕЛЬНО
// const allCategoriesList = document.querySelectorAll(".item > ul");
// console.log("allCategoriesList", allCategoriesList);

// const findElements = function (elements) {
//   for (const element of elements) {
//     const numbersOfElements = element.children.length;
//     console.log("numbersOfElements", numbersOfElements);
//     console.log("element", element);
//   }
// };

// findElements(allCategoriesList);

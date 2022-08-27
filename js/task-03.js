const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const picturesContainerEl = document.querySelector(".gallery");
// console.log("classList", picturesContainerEl.classList);

// ВАРИАНТ 1 - через добавление CSS-КЛАССА
picturesContainerEl.classList.add("gallery-taskThird");

// ВАРИАНТ 2 - Свойство по отдельности через STYLE
// picturesContainerEl.style.display = "flex";
// picturesContainerEl.style.gap = "30px";
// picturesContainerEl.style.listStyle = "none";
// picturesContainerEl.style.textAlign = "center";
// picturesContainerEl.style.paddingLeft = "0";

console.log("classList of picturesContainerEl:", picturesContainerEl.classList);

// ЧЕРЕЗ ШАБЛОННЫЕ СТРОКИ и insertAdjacentHTML
// join - распыление массива, убрать запятые между элементами массива
const picturesElements = images
  .map(({ url, alt }) => {
    return `<li width="320px">
  <h2>Photo: ${alt}</h2>
  <img src="${url}" alt="${alt}" width="350px" height="200px">
  </img> </li>
  `;
  })
  .join("");

console.log(picturesElements);

picturesContainerEl.insertAdjacentHTML("afterbegin", picturesElements);

/////////////////////////////////////////////////////////////////
// ВТОРОЙ ВАРИАНТ - ЧЕРЕЗ КОМАНДЫ createElement
// const picturesElements = images.map(({ url, alt }) => {
//   const galleryItem = document.createElement("li");
//   galleryItem.setAttribute("width", "320");
//   const imageEl = document.createElement("img");
//   imageEl.setAttribute("src", url);
//   imageEl.setAttribute("alt", alt);
//   imageEl.setAttribute("width", "350");
//   imageEl.setAttribute("height", "200");

//   galleryItem.appendChild(imageEl);
//   imageEl.insertAdjacentHTML("beforebegin", `<h2>Photo: ${alt} </h2>`);

//   return galleryItem;
// });

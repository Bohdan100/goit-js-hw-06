const counterValue = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");
console.log(incrementBtn, decrementBtn, valueEl);

const counter = {
  value: 0,
  increment() {
    this.value += 1;
    console.log(this.value);
  },
  decrement() {
    this.value -= 1;
    console.log(this.value);
  },
};

incrementBtn.addEventListener("click", () => {
  counter.increment();
  valueEl.textContent = counter.value;
});

decrementBtn.addEventListener("click", () => {
  counter.decrement();
  valueEl.textContent = counter.value;
});

// 2 ВАРИАНТ
// incrementBtn.addEventListener("click", () => {
//   counter.value += 1;
//   console.log(counter.value);
//   valueEl.textContent = counter.value;
// });

// decrementBtn.addEventListener("click", () => {
//   counter.value -= 1;
//   console.log(counter.value);
//   valueEl.textContent = counter.value;
// });

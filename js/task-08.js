const formEl = document.querySelector(".login-form");
// console.log(formEl);
// console.dir(formEl.elements);

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  //   Страница без перезагрузки, убрать настройки по умолчанию
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  //   console.dir(formElements);

  const mail = formElements.email.value;
  const password = formElements.password.value;

  // ОБЪЕКТ - значение почты и пароля
  const FormData = {
    mail,
    password,
  };

  mail === "" || mail === " " || password === "" || password === " "
    ? alert("Error !!! Username and password fields must be filled !!!")
    : (console.log(FormData), formEl.reset());

  //   ВТОРОЙ ВАРИАНТ
  //   if (mail === "" || mail === " " || password === "" || password === " ") {
  //     alert("Error !!! Username and password fields must be filled !!!");
  //   } else {
  //     console.log(FormData);
  //     formEl.reset();
  //   }
}

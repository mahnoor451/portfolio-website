let openModalBtnEl = document.querySelector(".open-modal-btn");
let firstContainerEl = document.querySelector(".first-container");
let secondContainerEl = document.querySelector(".second-container");
let closeIconEl = document.querySelector(".fa-solid");
let submitBtnEl = document.querySelector("#submit-btn");
const formEl = document.getElementById("login-form");
const successMessage = document.getElementById("success-message");

openModalBtnEl.addEventListener("click", () => {
  secondContainerEl.classList.remove("display-none");
  firstContainerEl.classList.add("active");
});

closeIconEl.addEventListener("click", () => {
  secondContainerEl.classList.add("display-none");
  firstContainerEl.classList.remove("active");
});

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  if (formEl.checkValidity()) {
    successMessage.innerText = "Login Successful! ✅";

    formEl.reset();

    setTimeout(() => {
      successMessage.innerText = "";
    }, 2000);
  }
});

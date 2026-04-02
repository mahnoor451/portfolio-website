
let btnEl = document.querySelector(".btn");
let inputEl = document.querySelector(".input");
let copyIconEl = document.querySelector(".fa-copy");
let alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
    createPassword();
});

copyIconEl.addEventListener("click", () => {
    copyPassword();
})

function createPassword () {
    let chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 14;
    let password = "";

    for (let index = 0; index < passwordLength; index++) {
        let randomNum = Math.floor(Math.random() * chars.length);
        // password += chars.substring(randomNum, randomNum + 1);
        password += chars[randomNum];
        // console.log(randomNum, password);
    }
      inputEl.value = password;
      alertContainerEl.textContent = password + " copied!";
}

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
        alertContainerEl.classList.add("active");
    }, 3000);
}


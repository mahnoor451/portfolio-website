let containerEl = document.querySelector(".typing");

let career = ["web developer", "designer", "writer", "IR Graduate"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText () {
   let careersIndex = career[careerIndex];
   characterIndex++;
   containerEl.innerHTML = `<h3>I am ${careersIndex[0] === "I" ? "an" : "a"} ${careersIndex.slice(0, characterIndex)}</h3>`;

   if (characterIndex === careersIndex.length) {
      careerIndex++;
      characterIndex = 0;
   }

   if (careerIndex === career.length) {
    careerIndex = 0;
   }

   setTimeout(updateText, 400);
}


// Projects Slider Code
const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
// const imgsEl = document.querySelectorAll("img");
const imgsEl = document.querySelectorAll(".slide");
let imageContainerEl = document.querySelector(".image_slider");

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  // imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 600}px)`;
  imageContainerEl.style.transform = 
  `translateX(-${(currentImg - 1) * 100}%)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

// Form Validation Code
let form = document.getElementById("form");
let btnEl = document.getElementById("btn");
let nameEl = document.getElementById("name");
let nameErrorEl = document.getElementById("nameError");
let emailEl = document.getElementById("email");
let emailErrorEl = document.getElementById("emailError");
let passwordEl = document.getElementById("password");
let passwordErrorEl = document.getElementById("passwordError");
let phoneEl = document.getElementById("phone");
let phoneErrorEl = document.getElementById("phoneError");
let successMsg = document.getElementById("successMsg");


nameEl.addEventListener("input", () => {
if (nameEl.value === "") {
    e.preventDefault();
    isValid = false;
    nameErrorEl.innerText = "Enter a Valid Name";
    nameEl.style.border = "2px solid red";
  } else {
    // nameErrorEl.innerText = "";
    nameEl.style.border = "2px solid green";
  }
});

emailEl.addEventListener("input", () => {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailEl.value.match(pattern)) {
    e.preventDefault();
    isValid = false;
    emailErrorEl.innerText = "Enter a valid Email";
    emailEl.style.border = "2px solid red";
  } else {
    emailEl.style.border = "2px solid green";
    // emailErrorEl.innerText = "";
  }
});

passwordEl.addEventListener("input", () => {

  if (passwordEl.value.length < 8) {
    e.preventDefault();
    isValid = false;
    passwordErrorEl.innerText = "Password must be 8 characters";
    passwordEl.style.border = "2px solid red";
  } else {
    // passwordErrorEl.innerText = "";
    passwordEl.style.border = "2px solid green";
  }
});

phoneEl.addEventListener("input", () => {
let phonePattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  if (!phoneEl.value.match(phonePattern)) {
    e.preventDefault();
    phoneErrorEl.innerText = "Enter a valid Phone Number";
    phoneEl.style.border = "2px solid red";
  } else {
    // phoneErrorEl.innerText = "";
    phoneEl.style.border = "2px solid green";
  }
});


form.addEventListener("submit", (e) => {
  let isValid = true;
 
  if (nameEl.value === "") {
    e.preventDefault();
    isValid = false;
    nameErrorEl.innerText = "Enter a Valid Name";
    nameEl.style.border = "2px solid red";
  } else {
    nameErrorEl.innerText = "";
    nameEl.style.border = "none";
  }

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailEl.value.match(pattern)) {
    e.preventDefault();
    isValid = false;
    emailErrorEl.innerText = "Enter a valid Email";
    emailEl.style.border = "2px solid red";
  } else {
    emailEl.style.border = "none";
    emailErrorEl.innerText = "";
  }

  if (passwordEl.value.length < 8) {
    e.preventDefault();
    isValid = false;
    passwordErrorEl.innerText = "Password must be 8 characters";
    passwordEl.style.border = "2px solid red";
  } else {
    passwordErrorEl.innerText = "";
    passwordEl.style.border = "none";
  }

let phonePattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  if (!phoneEl.value.match(phonePattern)) {
    e.preventDefault();
    phoneErrorEl.innerText = "Enter a valid Phone Number";
    phoneEl.style.border = "2px solid red";
  } else {
    phoneErrorEl.innerText = "";
    phoneEl.style.border = "none";
  }

   if (!isValid) {
    e.preventDefault();
  } else {
    successMsg.innerText = "✅ Form submitted successfully!";
  successMsg.style.color = "#22c55e";
  // form.reset();

  setTimeout(() => {
    successMsg.innerText = "";
  },5000);
}

});
let btnEl = document.getElementById("btn");
let profileInfoEl = document.querySelector(".profile-info");
let countryInfoEl = document.querySelector(".country-info");
let emailInfoEl = document.querySelector(".email-info");
let titleEl = document.getElementById("title");
let countryEl = document.getElementById("country");
let emailEl = document.getElementById("email");
let profileImgEl = document.querySelector(".img");
let profileContainerEl = document.querySelector(".profile-container");

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    profileInfoEl.innerText = "Updating...";
    countryInfoEl.innerText = "Updating...";
    emailInfoEl.innerText = "Updating...";
    profileImgEl.src = "spinner.svg";
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];
    // console.log(data);
    btnEl.disabled = false;
    btnEl.innerText = "Get Profile";
    profileContainerEl.style.display = "block";
    profileImgEl.src = user.picture.large;
    // firstEl.innerText = user.name.first;
    // lastEl.innerText = user.name.last;
    profileInfoEl.innerText = `Name: ${user.name.first + " " + user.name.last}`;
    countryInfoEl.innerText = `Country: ${user.location.country}`;
    emailInfoEl.innerText =`Email: ${user.email}`;
  } catch (error) {
    console.log(error);
    btnEl.disabled = false;
    btnEl.innerText = "Get Profile";
  }
});



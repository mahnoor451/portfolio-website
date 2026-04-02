let btnEl = document.getElementById("btn");
let inputEl = document.querySelector("#quote");
let authorEl = document.querySelector("#author");
let CopyEl = document.querySelector(".fa-copy");
let volumeEl = document.querySelector(".fa-volume-high");

btnEl.addEventListener("click", () => {
  generateQuote();
});

CopyEl.addEventListener("click", () => {
  copyQuote();
});

volumeEl.addEventListener("click", () => {
  speakQuote();
});

async function generateQuote() {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();
  console.log(data);

  inputEl.textContent = data.quote;
  authorEl.textContent = data.author;
}

function copyQuote() {
  let fullQuote = inputEl.textContent + " - " + authorEl.textContent;
  navigator.clipboard.writeText(fullQuote);
  document.querySelector(".message").classList.remove("remove");
  setTimeout(() => {
    document.querySelector(".message").classList.add("remove");
  }, 3000);
}

// New function for text-to-speech
function speakQuote() {
  // Stop any ongoing speech
  window.speechSynthesis.cancel();
  
  // Get the full quote text
  let fullQuote = inputEl.textContent + " by " + authorEl.textContent;
  
  // Create a new speech utterance
  let utterance = new SpeechSynthesisUtterance(fullQuote);
  
  // Optional: Configure voice settings
  utterance.rate = 1; // Speed: 0.1 to 10
  utterance.pitch = 1; // Pitch: 0 to 2
  utterance.volume = 1; // Volume: 0 to 1

  // Optional: Choose a specific voice (if available)
  let voices = window.speechSynthesis.getVoices();
  // Select a female voice if available
  let femaleVoice = voices.find(voice => voice.name.includes('Female') || voice.name.includes('Google UK English Female'));
  if (femaleVoice) {
    utterance.voice = femaleVoice;
  }
  
  // Speak the quote
  window.speechSynthesis.speak(utterance);
  
  // Add visual feedback (optional)
  volumeEl.style.color = "#4a4e69";
  setTimeout(() => {
    volumeEl.style.color = "#4a4e69";
  }, 500);
}

// Pre-load voices (some browsers need this)
window.speechSynthesis.onvoiceschanged = function() {
  window.speechSynthesis.getVoices();
};



// function generateQuote() {
//   let quotes = [
//     "The best way to predict the future is to create it. - Peter Drucker",
//     "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
//     "Believe you can and you're halfway there. - Theodore Roosevelt",
//     "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
//     "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
//     "The journey of a thousand miles begins with one step. - Lao Tzu",
//     "It always seems impossible until it's done. - Nelson Mandela",
//     "Do what you can, with what you have, where you are. - Theodore Roosevelt",
//     "Opportunities don't happen. You create them. - Chris Grosser",
//     "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
//     "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
//     "Act as if what you do makes a difference. It does. - William James",
//     "Quality means doing it right when no one is looking. - Henry Ford",
//     "The secret of getting ahead is getting started. - Mark Twain",
//     "Everything you've ever wanted is on the other side of fear. - George Addair",
//     "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
//     "Dream big and dare to fail. - Norman Vaughan",
//     "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
//     "Don't let yesterday take up too much of today. - Will Rogers",
//     "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
//     "Small progress is still progress. - Unknown",
//     "Great things never come from comfort zones. - Unknown",
//     "Push yourself, because no one else is going to do it for you. - Unknown",
//     "Success doesn't just find you. You have to go out and get it. - Unknown",
//     "Don't stop when you're tired. Stop when you're done. - Unknown",
//   ];

//   let randomIndex = Math.floor(Math.random() * quotes.length);

//   inputEl.textContent = quotes[randomIndex];
//   let quoteParts = quotes[randomIndex].split(" - ");
//   inputEl.textContent = quoteParts[0];
//   authorEl.textContent = quoteParts[1];
//   console.log(randomIndex + ": " + quotes[randomIndex]);
// }

// function copyQuote() {
//   let fullQuote = inputEl.textContent + " - " + authorEl.textContent;
//   navigator.clipboard.writeText(fullQuote);
//   document.querySelector(".message").classList.remove("remove");
//   setTimeout(() => {
//     document.querySelector(".message").classList.add("remove");
//   }, 3000);
// }


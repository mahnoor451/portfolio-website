let buttons = document.querySelectorAll("button");
let resultEl = document.getElementById("result");
let userScoreEl = document.getElementById("user-score");
let compScoreEl = document.getElementById("computer-score");
let yourChoiceEl = document.getElementById("your-choice");
let compChoiceEl = document.getElementById("comp-choice");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.id, "is clicked");
    // computerPlay();
    // console.log(
    //   "your Choice: ",
    //   button.id,
    //   "computer Choice: ",
    //   computerPlay(),
    // );
    let result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
});

function computerPlay() {
  let choices = ["rock", "paper", "scissor"];
  let randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
  // console.log(compChoice);
}

let computerScore = 0;
let userScore = 0;

function playRound(playerSelection, compSelection) {
  yourChoiceEl.innerText = `Your Choice: ${playerSelection}`;
  compChoiceEl.innerText = `Computer Choice: ${compSelection}`;

  yourChoiceEl.style.color = "#2196f3";
  compChoiceEl.style.color = "blueviolet";

  if (playerSelection === compSelection) {
    return "Game Tie!";
  } else if (
    (playerSelection === "rock" && compSelection === "scissor") ||
    (playerSelection === "scissor" && compSelection === "paper") ||
    (playerSelection === "paper" && compSelection === "rock")
  ) {
    userScore++;
    userScoreEl.innerText = userScore;
    return "You win! " + playerSelection + " beats " + compSelection;
  } else {
    computerScore++;
    compScoreEl.innerText = computerScore;
    return "You win! " + compSelection + " beats " + playerSelection;
  }
}


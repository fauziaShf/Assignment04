let computerChoice;

let userChoice;
function playerChoice() {
    let choice = prompt("Please enter your choice of either rock, paper or scissors");
    userChoice = choice.toLowerCase();
    if (userChoice === "rock" || userChoice === "scissors" || userChoice === "paper"){
        return userChoice;
    } else {
        alert("please type: rock, papper, or scissors.");
        }

}

const randomChoice = () => {
  let randomNumber = Math.round(Math.random() * 10);

  if (randomNumber <= 5) {
    return (computerChoice = "rock");
  } else if (randomNumber > 5 && randomNumber <= 10) {
    return (computerChoice = "paper");
  } else {
    return (computerChoice = "scissors");
  }
};

function checkCondition() {
  if (userChoice === computerChoice) {
    alert("Tie");
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      alert("Computer Won!!!!");
    } else {
      alert("You Won!!!!");
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      alert("Computer Won!!!!");
    } else {
      alert("You Won!!!!");
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      alert("Computer Won!!!!");
    } else {
      alert("You Won!!!!");
    }
  }
  
}

function playAgain() {
  let askAgain = prompt("Do you want to play again ?");
  if (askAgain === "y") {
    game();
  } else {
    alert("Thank you for playing!!");
  }
}

function game() {
  playerChoice();
  randomChoice();
  checkCondition();
  playAgain();
}

game();

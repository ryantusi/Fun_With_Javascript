let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};
console.log(generateTarget());

const compareGuesses = (human, computer, target) => {
  if (human > 9 || human < 0) {
    alert("Number Outside Range");
    return false;
  }
  let flag;
  let human_guess = target - human;
  let computer_guess = target - computer;

  if (human_guess < 0) {
    human_guess *= -1;
  }
  if (computer_guess < 0) {
    computer_guess *= -1;
  }

  if (human_guess == computer_guess) {
    flag = true;
  } else if (human_guess > computer_guess) {
    flag = false;
  } else if (computer_guess > human_guess) {
    flag = true;
  }

  return flag;
};

const updateScore = (winner) => {
  let name = winner.toLowerCase();
  if (name == "human") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};

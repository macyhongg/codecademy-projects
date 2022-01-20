let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9)
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  const humanDifference = Math.abs(secretTarget - humanGuess)
  const compDifference = Math.abs(secretTarget - computerGuess)

  if (humanDifference <= compDifference) {
    return true
  } else {
    return false
  }
}

const updateScore = () => {
  if ('human') {
    return humanScore + 1
  } if ('computer') {
    return computerScore + 1
  } else {
    return 'Error'
  }
}

const advanceRound = () => {
  return currentRoundNumber + 1;
}

updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1

// taking random number for the guess
let randomNumber = parseInt(Math.random() * 100 + 1);

// at submit we need to listen the call
const submit = document.querySelector("#subt");

//take the user-input from the text box of id guessField.
const userInput = document.querySelector("#guessField");

// at previous guesses we need to print the guesses (class = guesses)
const guessSlot = document.querySelector(".guesses");

// to print the remaining guesses named
const remainingGuesses = document.querySelector(".lastResult");

// to print guesses value is higher or lower we have a paragraph of class lowOrHi
const lowOrHigh = document.querySelector(".lowOrHi");

// when user have exhausted all the remaining guesses then we doesn't show him the .resultParas we just show him to start over.
const startOver = document.querySelector(".resultParas");

// taking variables required for starting the game
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

//check if we are eligible to playGame then starts.
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    // jo user input mila hoga usko guess me store krlia ar usko validateGuess ke liye bhej dia
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// we have validated the given number by user
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a no. greater than 1");
  } else if (guess > 100) {
    alert("please enter a no. less that 100");
  } else {
    prevGuess.push(guess);
    if (numGuess == 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //checks the entered value is equal, high or low and prints it using the displayMessage function.
  if (guess == randomNumber) {
    displayMessage(`You guessed it right`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  //cleans the entered the value updates the prevGuess array
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remainingGuesses.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //displays the message according to the guess of the user but first passing through the checkGuess function.
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //ends the game
  userInput = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //start the new game
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remainingGuesses.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled", "");
    startOver.removeChild(p);
    playGame = true;
  });
}

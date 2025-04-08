let sumbit = document.getElementById("btn");
let inputField = document.getElementById("inputField");
let PreviousGueses = document.getElementById("Previous");
let Remaining = document.getElementById("Remaining");
let resultPara = document.getElementById("resultPara");
let hiLow = document.getElementById("HiLow");
let p = document.createElement("p");
let randomNumber = parseInt(Math.random() * 100 + 1);
let prevGuess = [];
let guesesNumber = 0;
let playGame = true;

if (playGame) {
  sumbit.addEventListener("click", (e) => {
    e.preventDefault();
    const gueses = inputField.value;
    validateGuess(gueses);
  });
}
function validateGuess(gueses) {
  if (gueses === "" || isNaN(gueses)) {
    alert("please enter Number Value");
  } else if (gueses < 1) {
    alert("please enter Number more than 0 ");
  } else if (gueses > 100) {
    alert("please enter Number less than 100 ");
  } else {
    prevGuess.push(gueses);
    if (guesesNumber === 10) {
      cleanUpGuess(gueses);
      displayMassage(`Game Over : Random Number was ${randomNumber}`);
      endGame();
    } else {
      cleanUpGuess(gueses);
      checkGuess(gueses);
    }
  }
  //
}

function checkGuess(gueses) {
  if (gueses == randomNumber) {
    displayMassage("You Are Win 😎 ");
    endGame();
  } else if (gueses < randomNumber) {
    displayMassage("Number TOO Low");
  } else if (gueses > randomNumber) {
    displayMassage("Number TOO High");
  } else {
    if (prevGuess.includes(gueses)) {
      alert("You already guessed that number!");
      return;
    }
  }
}

function cleanUpGuess(gueses) {
  inputField.value = "";
  PreviousGueses.innerHTML += `${gueses} ,`;
  guesesNumber++;
  Remaining.innerHTML = `${10 - guesesNumber}`;
}

function displayMassage(gueses) {
  hiLow.innerHTML = `${gueses}`;
}

function endGame() {
  inputField.value = "";
  inputField.setAttribute("disabled", "");
  resultPara.innerHTML = "New Game";
  playGame = false;
  newGame();
}

function newGame() {
  resultPara.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1);

    resultPara.innerHTML = "";
    inputField.removeAttribute("disabled");
    prevGuess = [];
    guesesNumber = 0;
    hiLow.innerHTML = "";
    PreviousGueses.innerHTML = "";
    Remaining.innerHTML = 10;
    playGame = true;
  });
  //
}

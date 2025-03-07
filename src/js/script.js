let sumbit = document.getElementById("btn");
let inputField = document.getElementById("inputField");
let PreviousGueses = document.getElementById("Previous");
let Remaining = document.getElementById("Remaining");
let resultPara = document.getElementById("resultPara");

let guesesNumber = 1;
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
    alert("please enter Number Value");
  }
  //
}

function checkGuess(gueses) {
  //
}

function displayMassage(gueses) {
  //
}

function endGame() {
  //
}

function newGame() {
  //
}

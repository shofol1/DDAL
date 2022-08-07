"use-strict";
const againBtn = document.querySelector(".againBtn");
const secret = document.querySelector(".secret");
const number = document.querySelector(".number");
const guessNumber = document.querySelector(".guessNumber");
const checkBtn = document.querySelector(".checkBtn");
const message = document.querySelector(".message");
const scoreField = document.querySelector(".score");
const highScoreField = document.querySelector(".highScore");

//set default score
let score = 20;
let highScore = 0;

//random number set in guess numbber

const numberRandom = Math.trunc(Math.random() * 20 + 1);
secret.textContent = numberRandom;

//add event in check btn
checkBtn.addEventListener("click", () => {
  const guess = Number(guessNumber.value);
  //empty field
  if (!guess) {
    message.textContent = "⛔️ No result ";
  }
  //check correct or incorrect
  else if (guess === numberRandom) {
    message.textContent = "🎉 Correct Number !";
    highScore++;
    highScoreField.textContent = highScore;
  } else if (guess > numberRandom) {
    if (score > 1) {
      message.textContent = "🥲 Number is high!";
      score--;
      scoreField.textContent = score;
    } else {
      message.textContent = "😒You lost the game!";
      scoreField.textContent = 0;
    }
  } else if (guess < numberRandom) {
    if (score > 1) {
      message.textContent = "🥲 Number is low!";
      score--;
      scoreField.textContent = score;
    } else {
      message.textContent = "😒You lost the game!";
      scoreField.textContent = 0;
    }
  }
});

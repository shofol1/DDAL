"use-strict";
const againBtn = document.querySelector(".againBtn");
const secret = document.querySelector(".secret");
const number = document.querySelector(".number");
const guessNumber = document.querySelector(".guessNumber");
const checkBtn = document.querySelector(".checkBtn");
const message = document.querySelector(".message");
const scoreField = document.querySelector(".score");
const highScoreField = document.querySelector(".highScore");
const body = document.querySelector("body");
const hideNumber = document.querySelector(".hide-number ");
//set default score
let score = 20;
let highScore = 0;

//random number set in guess numbber
let numberRandom = Math.trunc(Math.random() * 20 + 1);

//show message function
const displayMessage = (mes) => {
  message.textContent = mes;
};

//add event in check btn
checkBtn.addEventListener("click", () => {
  const guess = Number(guessNumber.value);
  //empty field
  if (!guess) {
    displayMessage("⛔️ No result ");
  }
  //check correct or incorrect
  else if (guess === numberRandom) {
    displayMessage("🎉 Correct Number !");
    hideNumber.style.width = "130px";
    body.style.backgroundColor = "green";

    secret.textContent = numberRandom;
    highScoreField.textContent = guess;
  } else if (guess !== numberRandom) {
    if (score > 1) {
      guess > numberRandom
        ? displayMessage("🥲 Number is high!")
        : displayMessage("🥲 Number is low!");
      score--;
      scoreField.textContent = score;
    } else {
      displayMessage("😒You lost the game!");
      scoreField.textContent = 0;
    }
  }
  //   else if (guess > numberRandom) {
  //     if (score > 1) {
  //       message.textContent = "🥲 Number is high!";
  //       score--;
  //       scoreField.textContent = score;
  //     } else {
  //       message.textContent = "😒You lost the game!";
  //       scoreField.textContent = 0;
  //     }
  //   } else if (guess < numberRandom) {
  //     if (score > 1) {
  //       message.textContent = "🥲 Number is low!";
  //       score--;
  //       scoreField.textContent = score;
  //     } else {
  //       message.textContent = "😒You lost the game!";
  //       scoreField.textContent = 0;
  //     }
  //   }
});

//reset all

againBtn.addEventListener("click", () => {
  score = 20;
  message.textContent = "Start Guessing.....";
  numberRandom = Math.trunc(Math.random() * 20 + 1);
  secret.textContent = "?";
  scoreField.textContent = score;
  body.style.backgroundColor = "#000";
  hideNumber.style.width = "80px";
  guessNumber.value = "";
});

// modal code
const modalOpenBtn = document.querySelectorAll(".btn-modal");
const modalCloseBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".moddal");
const overlay = document.querySelector(".overlay-hidden ");

for (let i = 0; i < modalOpenBtn.length; i++) {
  modalOpenBtn[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
modalCloseBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

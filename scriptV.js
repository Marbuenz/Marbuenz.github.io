"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 12;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Thank youuuuuuu!!, yayy";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.3;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Di ka talaga maawa?",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
    "Love naman :(((",
    "Im crying na talaga :((",
    "Please baby koooo :(((",
    "Lovey kooo :((",
    "My mahallllll plssss :((",
    "Ako na to ohh, plss maawa kana",
    "BABYYYYYY PLSSSSS :((",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.gif`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

document.querySelector(".btn--yes").addEventListener("click", function () {
  document.querySelector(".btn--click-me").classList.remove("hidden");
});

document.querySelector(".btn--click-me").addEventListener("click", function () {
  window.location.href = "Valen.html";
});

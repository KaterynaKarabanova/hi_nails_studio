import { data } from "./data.js";

console.log(data);
const logoSection = document.querySelector(".bg");
const circle = document.querySelector(".circle-img");
const rotateBtn = document.querySelector(".btn-5");
const circleWrapper = document.querySelector(".container-circle");
const gift = document.querySelector(".modal-gift");
const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal-text");
setTimeout(() => {
  logoSection.classList.add("none");
}, 1600);

rotateBtn.addEventListener("click", onDanceBtnClick);

function onDanceBtnClick() {
  rotateCircle();
}

function rotateCircle() {
  circle.classList.add("rotating");
  setTimeout(() => {
    getSong();
  }, 5000);
}

function getSong() {
  const giftIndex = Math.floor(Math.random() * 8);
  const giftObj = data[Number(giftIndex)];
  circleWrapper.classList.add("hidden");
  modal.classList.remove("hidden");
  modal.style.opacity = "100";
  if (giftIndex > 2) {
    gift.style.fontSize = "34px";
    gift.style.top = "30%";
  }
  if (giftIndex === 3 || giftIndex === 5) {
    gift.style.fontSize = "34px";
    gift.style.top = "15%";
  }
  gift.textContent = `${giftObj.gift}`;
  modalText.textContent = `${giftObj.description}`;
}

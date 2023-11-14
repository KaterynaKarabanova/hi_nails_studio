import { data } from "./data.js";
import { refs } from "./refs.js";

setTimeout(() => {
  refs.logoSection.classList.add("none");
}, 1600);

refs.rotateBtn.addEventListener("click", onDanceBtnClick);

function onDanceBtnClick() {
  rotateCircle();
}

function rotateCircle() {
  refs.rotateBtn.setAttribute("disabled", "");
  refs.circle.classList.add("rotating");
  setTimeout(() => {
    getSong();
  }, 5000);
}

function getSong() {
  const giftIndex = Math.floor(Math.random() * 8);
  const giftObj = data[Number(giftIndex)];
  refs.circleWrapper.classList.add("hidden");
  refs.modal.classList.remove("hidden");
  refs.modal.style.opacity = "100";
  if (giftIndex > 2) {
    refs.gift.style.fontSize = "34px";
    refs.gift.style.top = "30%";
  }
  if (giftIndex === 3 || giftIndex === 5) {
    refs.gift.style.fontSize = "34px";
    refs.gift.style.top = "15%";
  }
  refs.gift.textContent = `${giftObj.gift}`;
  refs.modalText.textContent = `${giftObj.description}`;
}

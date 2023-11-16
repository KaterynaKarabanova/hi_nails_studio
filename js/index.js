import { data } from "./data.js";
import { refs } from "./refs.js";

setTimeout(() => {
  refs.logoSection.classList.add("none");
}, 1450);

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
  const giftIndex = Math.floor(Math.random() * 15);
  const giftObj = data[Number(giftIndex)];
  refs.circleWrapper.classList.add("hidden");
  refs.modal.classList.remove("hidden");
  refs.modal.style.opacity = "100";
  if (giftIndex > 5) {
    refs.gift.style.fontSize = "34px";
    refs.gift.style.top = "30%";
  }
  if (
    giftIndex === 5 ||
    giftIndex === 6 ||
    giftIndex === 7 ||
    giftIndex === 12 ||
    giftIndex === 11 ||
    giftIndex === 10
  ) {
    refs.gift.style.fontSize = "33px";
    refs.gift.style.top = "15%";
  }
  refs.gift.textContent = `${giftObj.gift}`;
  refs.modalText.textContent = `${giftObj.description}`;
}

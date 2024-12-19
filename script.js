const btnYes = document.getElementById("button-yes");
const btnNo = document.getElementById("button-no");

let count = 0;

const pressYes = () => {
  if (count === 0) {
    btnNo.classList.add("go-left");
    btnYes.classList.add("go-right");
    count++;
  } else if (count === 1) {
    btnNo.classList.add("go-left-focus-out");
    btnYes.classList.add("go-right-focus");
    count++;
  } else if (count === 2) {
    btnNo.classList.add("full-focus");
    btnYes.classList.add("display-none");
  }
};

btnNo.addEventListener("click", pressYes);

const text = document.querySelector(".text");

let gradientAngle = 0;

setInterval(() => {
  gradientAngle += 1;
  text.style.background = `linear-gradient(${gradientAngle}deg, #ff0080, #40e0d0,rgb(0, 255, 76), #ffff00)`;
  text.style.backgroundSize = "300% 300%";
  text.style.backgroundClip = "text";
  text.style.webkitBackgroundClip = "text";
}, 50);

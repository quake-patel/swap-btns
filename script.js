const btnYes = document.getElementById("button-yes");
const btnNo = document.getElementById("button-no");

let count = 0;

const pressNo = () => {
  if (count === 0) {
    btnNo.classList.add("go-left");
    btnYes.classList.add("go-right");
    count++;
  } else if (count === 1) {
    btnNo.classList.add("go-left-focus-out");
    btnYes.classList.add("go-right-focus");
    count++;
  } else if (count === 2) {
    btnYes.classList.add("full-focus");
    btnNo.classList.add("display-none");
  }
};

const pressYes = () => {
  btnYes.classList.add("yes-yes");
};

// Bind to btnYes instead of btnNo
btnNo.addEventListener("click", pressNo);
btnYes.addEventListener("click", pressYes);

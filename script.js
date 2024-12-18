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

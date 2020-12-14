const btnBack = document.getElementById("back");
const btnNext = document.getElementById("next");
const lines = document.querySelectorAll(".line");
const circles = document.querySelectorAll(".circle");
const units = document.querySelectorAll(".unit");

let currentActive = -1;

btnNext.addEventListener("click", loadUnit);
function loadUnit() {
  currentActive++;
  if (currentActive < units.length) {
    loadCircle();
    loadLine();
  } else {
    currentActive--;
  }
  buttonChange();
}

btnBack.addEventListener("click", unLoad);
function unLoad() {
  units.forEach((unit) => {
    units[currentActive].classList.add("in-active");
  });
  if (units[currentActive].classList.contains("in-active")) {
    units[currentActive].classList.remove("in-active");

    unLoadCircle();

    unLoadLine();
    currentActive--;
  }
  buttonChange();
}

function buttonChange() {
  if (currentActive === -1) {
    btnBack.classList.add("disabled-btn");
    btnBack.classList.remove("active-btn");
  } else if (currentActive < 2) {
    btnBack.classList.remove("disabled-btn");
    btnBack.classList.add("active-btn");
    btnNext.classList.add("active-btn");
    btnNext.classList.remove("disabled-btn");
  } else if (currentActive >= 2) {
    btnNext.classList.remove("active-btn");
    btnNext.classList.add("disabled-btn");
  }
}
function loadCircle() {
  circles.forEach((circle) => {
    circles[currentActive + 1].classList.add("active-circle");
  });
}
function loadLine() {
  lines.forEach((line) => {
    lines[currentActive].classList.add("line-active");
  });
}
function unLoadCircle() {
  circles.forEach((circle) => {
    circles[currentActive + 1].classList.remove("active-circle");
  });
}
function unLoadLine() {
  lines.forEach((line) => {
    lines[currentActive].classList.remove("line-active");
  });
}


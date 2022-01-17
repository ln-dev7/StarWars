// Constatntes 

const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");
const imgCards = document.querySelectorAll(".img-card");
const logos = document.querySelectorAll(".logo");
const numbers = document.querySelectorAll(".number");
const titles = document.querySelectorAll(".title");
const descriptions = document.querySelectorAll(".description");
const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".line");

// Evenements

arrowRight.addEventListener("click", (e) => {
  changeRight(imgCards)
  changeRight(logos)
  changeRight(numbers)
  changeRight(titles)
  changeRight(descriptions)
  changeCircleRight(circles)
  changeLineRight(lines)
});
arrowLeft.addEventListener("click", (e) => {
    changeLeft(imgCards)
    changeLeft(logos)
    changeLeft(numbers)
    changeLeft(titles)
    changeLeft(descriptions)
    changeCircleLeft(circles)
    changeLineLeft(lines)
});


// Fonctions 

var changeRight = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el.classList.contains("active")) {
      el.classList.remove("active");
      var index = i + 1;
    }
  }
  if (index > arr.length - 1) {
    index = 0;
  }
  let next = arr[index];
  next.classList.add("active");
};

var changeLeft = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el.classList.contains("active")) {
      el.classList.remove("active");
      var index = i - 1;
    }
  }
  if (index < 0) {
    index = arr.length - 1;
  }
  let next = arr[index];
  next.classList.add("active");
};

var changeCircleRight = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el.classList.contains("active")) {
      var index = i + 1;
    }
  }
  if (index > arr.length - 1) {
    index = 0;
  }
  let next = arr[index];
  next.classList.add("active");
};

var changeCircleLeft = function (arr) {
  let tab = []
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el.classList.contains("active")) {
      tab.push(el)
    }
  }
  if (tab.length >= 2 ) {
    tab[tab.length - 1].classList.remove("active")
  }
};

var changeLineRight = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[0].classList.contains("active")) {
      arr[0].classList.add("active")
      return
    }
    const el = arr[i];
    if (el.classList.contains("active")) {
      var index = i + 1;
    }
  }
  if (index > arr.length - 1) {
    index = 0;
  }
  let next = arr[index];
  next.classList.add("active");
};

var changeLineLeft = function (arr) {
  let tab = []
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el.classList.contains("active")) {
      tab.push(el)
    }
  }
  if (tab.length >= 1 ) {
    tab[tab.length - 1].classList.remove("active")
  }
};
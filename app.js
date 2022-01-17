// Constatntes 

const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");
const imgCards = document.querySelectorAll(".img-card");
const logos = document.querySelectorAll(".logo");
const numbers = document.querySelectorAll(".number");
const titles = document.querySelectorAll(".title");
const descriptions = document.querySelectorAll(".description");

// Evenements

arrowRight.addEventListener("click", (e) => {
  changeRight(imgCards)
  changeRight(logos)
  changeRight(numbers)
  changeRight(titles)
  changeRight(descriptions)
});
arrowLeft.addEventListener("click", (e) => {
    changeLeft(imgCards)
    changeLeft(logos)
    changeLeft(numbers)
    changeLeft(titles)
    changeLeft(descriptions)
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

const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");

let activesSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  chagesSlides("up");
});

downBtn.addEventListener("click", () => {
  chagesSlides("down");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    chagesSlides("up");
  } else if (event.key === "ArrowDown") {
    chagesSlides("down");
  }
});

function chagesSlides(direction) {
  if (direction === "up") {
    activesSlideIndex++;
    if (activesSlideIndex === slidesCount) {
      activesSlideIndex = 0;
    }
  } else if (direction === "down") {
    activesSlideIndex--;
    if (activesSlideIndex < 0) {
      activesSlideIndex = slidesCount - 1;
    }
  }
  const heught = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activesSlideIndex * heught}px)`;
  sidebar.style.transform = `translateY(${activesSlideIndex * heught}px)`;
}

const slide = Array.from(document.getElementsByClassName("slider__item"));
const nextSlide = document.querySelector(".slider__arrow_next");
const prevSlide = document.querySelector(".slider__arrow_prev");
const sliderDots = Array.from(document.getElementsByClassName("slider__dot"));
let count = 0;

function hideSlide() {
  slide[count].classList.remove("slider__item_active");
  sliderDots[count].classList.remove("slider__dot_active");
}

function moveSlide() {
  if (count < 0) count = slide.length - 1;
  if (count === slide.length) count = 0;
  sliderDots[count].classList.add("slider__dot_active");
  slide[count].classList.add("slider__item_active");
}

nextSlide.onclick = () => {
  hideSlide();
  count++;
  moveSlide();
};

prevSlide.onclick = () => {
  hideSlide();
  count--;
  moveSlide();
};

sliderDots.forEach((dot, i) => {
  dot.onclick = () => {
    hideSlide();
    count = i;
    moveSlide();
  };
});
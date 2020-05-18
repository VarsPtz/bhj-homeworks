"use strict";

const revealItems = document.querySelectorAll(".reveal");

function displayReveal() {
 for (let reveal of revealItems) {
  if (reveal.getBoundingClientRect().top < window.innerHeight && reveal.getBoundingClientRect().bottom > 0) {
   reveal.classList.add("reveal_active");
  } else {
   reveal.classList.remove("reveal_active");
  }
 }
}

document.addEventListener('scroll', displayReveal);
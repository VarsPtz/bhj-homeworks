"use strict";

const fontSizes = document.querySelectorAll(".font-size");
const books = document.querySelectorAll(".book");

Array.from(fontSizes).forEach(item => {
 item.addEventListener("click", event => {
  
  event.preventDefault();
  const fontSizesActive = Array.from(document.querySelectorAll(".font-size_active")); 
  
  
  if (fontSizesActive.length != 0) {
   fontSizesActive[0].classList.remove("font-size_active");
   item.closest(".book").className = "book";
  }

  item.classList.add("font-size_active");
  let dataSize = item.getAttribute("data-size");

  if (dataSize) {
   item.closest(".book").classList.add(`book_fs-${dataSize}`);
  }

 });
});
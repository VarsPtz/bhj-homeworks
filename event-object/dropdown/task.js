"use strict";

const dropDownValue = document.querySelectorAll(".dropdown__value");
const dropDownList = document.querySelectorAll(".dropdown__list");


Array.from(dropDownValue).forEach(item => {
 item.addEventListener("click", (event) => {
   if (event.target.nextElementSibling.classList.contains("dropdown__list")) {
     event.target.nextElementSibling.classList.toggle("dropdown__list_active");
   }
 });
});

Array.from(dropDownList).forEach(item => {
 item.addEventListener("click", (event) => {
   event.preventDefault();

   if (
     event.target
       .closest(".dropdown__list")
       .previousElementSibling.classList.contains("dropdown__value")
   ) {
     event.target.closest(
       ".dropdown__list"
     ).previousElementSibling.textContent = event.target.textContent;
   }

   event.target
     .closest(".dropdown__list")
     .classList.toggle("dropdown__list_active");
 });
});
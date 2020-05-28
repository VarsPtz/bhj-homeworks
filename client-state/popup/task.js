"use strict";

const modal = document.getElementById("subscribe-modal");
const modalCloseBtn = document.querySelector(".modal__close");

function getCookei(name) {
 const value = "; " + document.cookie;
 let parts = value.split("; " + name + "=");

 if (parts.length === 2) {
  return parts
  .pop()
  .split(";")
  .shift();
 }
}

modalCloseBtn.addEventListener("click", (event) => {
 event.preventDefault();
 event.target.closest(".modal").classList.remove("modal_active");
 document.cookie = "modalClosed=true";
});

window.addEventListener("DOMContentLoaded", () => {
 
 if (getCookei("modalClosed")) {  
  modal.classList.remove("modal_active");
 } else {
  modal.classList.add("modal_active");  
 }

});
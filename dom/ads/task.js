"use strict";

function advertizingRotator() {
 
 const rotators = Array.from(document.querySelectorAll(".rotator__case_active")); 
 
 rotators.forEach(rotator => {
  rotator.style.color = rotator.getAttribute("data-color");  
  rotator.classList.remove("rotator__case_active");
  if (rotator.nextElementSibling) {
   let dataColor = rotator.nextElementSibling.getAttribute("data-color");
   let dataSpeed = rotator.nextElementSibling.getAttribute("data-speed");
   setTimeout(() => {
    rotator.nextElementSibling.style.color = dataColor;
    rotator.nextElementSibling.classList.add("rotator__case_active");
   }, dataSpeed);   
  } else {
   let dataColor = rotator.parentElement.querySelector(".rotator__case").getAttribute("data-color");
   let dataSpeed = rotator.parentElement.querySelector(".rotator__case").getAttribute("data-speed");
   setTimeout(() => {
    rotator.parentElement.querySelector(".rotator__case").style.color = dataColor; 
    rotator.parentElement.querySelector(".rotator__case").classList.add("rotator__case_active");
   }, dataSpeed);   
  }
 });
}

setInterval(advertizingRotator, 1000);

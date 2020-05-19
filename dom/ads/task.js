"use strict";

// function advertizingRotator() {
 
//  const rotators = Array.from(document.querySelectorAll(".rotator__case_active")); 
 
//  rotators.forEach(rotator => {
//   rotator.style.color = rotator.getAttribute("data-color");  
//   rotator.classList.remove("rotator__case_active");
//   if (rotator.nextElementSibling) {
//    let dataColor = rotator.nextElementSibling.getAttribute("data-color");
//    let dataSpeed = rotator.nextElementSibling.getAttribute("data-speed");
//    setTimeout(() => {
//     rotator.nextElementSibling.style.color = dataColor;
//     rotator.nextElementSibling.classList.add("rotator__case_active");
//    }, dataSpeed);   
//   } else {
//    let dataColor = rotator.parentElement.querySelector(".rotator__case").getAttribute("data-color");
//    let dataSpeed = rotator.parentElement.querySelector(".rotator__case").getAttribute("data-speed");
//    setTimeout(() => {
//     rotator.parentElement.querySelector(".rotator__case").style.color = dataColor; 
//     rotator.parentElement.querySelector(".rotator__case").classList.add("rotator__case_active");
//    }, dataSpeed);   
//   }
//  });
// }

// setInterval(advertizingRotator, 1000);
//ver.2

const rotators = Array.from(document.getElementsByClassName("rotator"));

rotators.forEach(rotator => {

  const childrenItems = rotator.children;
  let rotatorCounter = 1;
  let rotatorSpeed = 1000;
  let childrenItemsLength = childrenItems.length;

  function advertizingRotator() {

    for (let i = 0; i < childrenItemsLength; i++) {
      childrenItems[i].classList.remove("rotator__case_active");
    }

    childrenItems[rotatorCounter].classList.add("rotator__case_active");
    let rotatorColor = childrenItems[rotatorCounter].getAttribute("data-color");
    childrenItems[rotatorCounter].style.color = rotatorColor;//`${rotatorColor}`;
    rotatorSpeed = childrenItems[rotatorCounter].getAttribute("data-speed");

    if (rotatorCounter < childrenItemsLength - 1) {
      rotatorCounter++;
    } else {
      rotatorCounter = 0;
    }
    
    setTimeout(advertizingRotator, rotatorSpeed);

  }

  setTimeout(advertizingRotator, rotatorSpeed);

});
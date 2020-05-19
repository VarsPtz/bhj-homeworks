"use strict";

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
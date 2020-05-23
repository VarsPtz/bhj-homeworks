"use strict";

const hasTooltip = document.querySelectorAll(".has-tooltip");
const hasTooltipLength = hasTooltip.length;
let tooltipsCollection;



function tooltipsCreator() {
 Array.from(hasTooltip).forEach(tooltip => {
  tooltip.insertAdjacentHTML("afterEnd", `<div class='tooltip' data-position="left">${tooltip.title}</div>`);
 }); 

 tooltipsCollection = document.querySelectorAll(".tooltip");
}


for (let i = 0; i < hasTooltipLength; i++) {
 
 hasTooltip[i].addEventListener("click", event => {

  event.preventDefault();

  let activeTooltips = document.querySelectorAll(".tooltip_active");  

  if (tooltipsCollection[i].classList.contains("tooltip_active")) {

   tooltipsCollection[i].classList.remove("tooltip_active");

  } else {

   if (activeTooltips.length != 0) {     
     activeTooltips[0].classList.remove("tooltip_active");
   }

   const hasTooltipPosition = event.target.getBoundingClientRect();   

   const tooltipAttributeDataPosition = tooltipsCollection[i].getAttribute("data-position");

   if (tooltipAttributeDataPosition == "bottom") {
    tooltipsCollection[i].style = `
     top: ${hasTooltipPosition.top + hasTooltipPosition.height}px;
     left: ${hasTooltipPosition.left}px;
    `;
    tooltipsCollection[i].classList.add("tooltip_active");
   }

   if (tooltipAttributeDataPosition == "top") {     
     tooltipsCollection[i].style = `
     top: ${hasTooltipPosition.top - 30}px;
     left: ${hasTooltipPosition.left}px;
    `;
     tooltipsCollection[i].classList.add("tooltip_active");
   }

   if (tooltipAttributeDataPosition == "left") {
     tooltipsCollection[i].classList.add("tooltip_active");

     tooltipsCollection[i].style = `
     top: ${hasTooltipPosition.top - 5}px;
     left: ${hasTooltipPosition.left - tooltipsCollection[i].getBoundingClientRect().width - 5}px;
    `;
   }

   if (tooltipAttributeDataPosition == "right") {
     tooltipsCollection[i].classList.add("tooltip_active");

     tooltipsCollection[i].style = `
     top: ${hasTooltipPosition.top - 5}px;
     left: ${hasTooltipPosition.right + 5}px;
    `;
   }

  }
  
 });

}


document.addEventListener("DOMContentLoaded", tooltipsCreator);
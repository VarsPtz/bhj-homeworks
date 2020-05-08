"use strict";

const targetImg = document.getElementById("cookie");
const counterOfClicks = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");

// let startTime = Date.now();
let startTime = 0;

targetImg.onclick = function () { 
 
 counterOfClicks.textContent++;

 let currentTime = Date.now();

 if (startTime) {
  let timeDifference = (currentTime - startTime) / 1000;
  clickerSpeed.textContent = (1 / timeDifference).toFixed(2);  
 }
 
 startTime = currentTime;
 
 targetImg.width = 300;
 setTimeout(function() {
  targetImg.width = 200;
 }, 100); 

}
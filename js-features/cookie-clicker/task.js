"use strict";

const targetImg = document.getElementById("cookie");
const counterOfClicks = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");

let startTime = Date.now();

targetImg.onclick = function () { 
 
 counterOfClicks.textContent++;
 
 targetImg.width = 300;
 setTimeout(function() {
  targetImg.width = 200;
 }, 100);

 let currentTime = Date.now(); 
 let timeDifference = (currentTime - startTime) / 1000;
 
 clickerSpeed.textContent = (+counterOfClicks.textContent / timeDifference).toFixed(2);

}
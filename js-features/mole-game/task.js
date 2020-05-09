"use strict";

const targetHoles = document.getElementsByClassName("hole");
const hit = document.getElementById("dead");
const miss = document.getElementById("lost");

function reloadGame() {
 hit.textContent = 0;
 miss.textContent = 0;
}

// ver. 1
for (let i = 0; i < targetHoles.length; i++) {
 targetHoles[i].addEventListener("click", checkResult);
}


function checkResult() {

 this.classList.contains("hole_has-mole") ? hit.textContent++ : miss.textContent++; 

 if (miss.textContent == 5) {
  alert("Вы проиграли!");
  reloadGame();
 }

 if (hit.textContent == 10) {
  alert("Вы выиграли!");
  reloadGame();
 }
}

//ver. 2
// const getHole = index => document.getElementById(`hole${index}`);

// for (let i = 1; i < 10; i++) { 
 
//  const hole = getHole(i);
 
//  hole.onclick = function() {
//   hole.classList.contains("hole_has-mole") ? hit.textContent++ : miss.textContent++;
  
//   if (miss.textContent == 5) {
//     alert("Вы проиграли!");
//     reloadGame();
//   }

//   if (hit.textContent == 10) {
//     alert("Вы выиграли!");
//     reloadGame();
//   }
//  }
 
// }
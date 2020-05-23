"use strict";

const btnTaskAdd = document.getElementById("tasks__add");
const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");

function addTask() {
 if (notEmpty(taskInput.value)) {
  taskList.insertAdjacentHTML("beforeEnd", 
   `
   <div class="task">
    <div class="task__title">
     ${taskInput.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
   </div>
   `
  );
 } 
}

function notEmpty(data) {
 return (data.trim() != "");
}

btnTaskAdd.addEventListener("click", event => {
 event.preventDefault();
 addTask();
 taskInput.value = "";
});

taskInput.addEventListener("keydown", event => { 
  if (event.keyCode === 13) {
   event.preventDefault();
   addTask();
   event.target.value = "";
  }
});

taskList.addEventListener("click", event => {
 if (event.target.classList.contains("task__remove")) {
  event.target.closest(".task").remove();
 }
});
"use strict";

const btnTaskAdd = document.getElementById("tasks__add");
const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");
let taskIdCounter;

if (localStorage.getItem("lastTaskId")) {
  for (let i = 0; i <= localStorage.getItem("lastTaskId"); i++) {
    if (localStorage.getItem(`task${i}`)) {      
      let data = localStorage.getItem(`task${i}`);
      taskList.insertAdjacentHTML(
        "beforeEnd",
        `
        <div class="task" data-task-id="task${i}">
        <div class="task__title">
        ${data}
        </div>
        <a href="#" class="task__remove">&times;</a>
       </div>
       `
      );
    }
  }
  taskIdCounter = +localStorage.getItem("lastTaskId") + 1;
} else {
  taskIdCounter = 0;
}

function addTask() {
 if (notEmpty(taskInput.value)) {
  taskList.insertAdjacentHTML(
    "beforeEnd",
    `
   <div class="task" data-task-id="task${taskIdCounter}">
    <div class="task__title">
     ${taskInput.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
   </div>
   `
  );
  localStorage.setItem("lastTaskId", taskIdCounter);
  localStorage.setItem(`task${taskIdCounter++}`, taskInput.value);
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
  const taskId = event.target.closest(".task").getAttribute("data-task-id");
  localStorage.removeItem(taskId);  
  event.target.closest(".task").remove();
 }
});
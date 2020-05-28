"use strict";

const editor = document.getElementById("editor");
const clearButton = document.getElementById("clear_button");

function saveToLocalStorage() {
 localStorage.textArea = editor.value;
}

function getFromLocalStorage() {
 if (localStorage.textArea) {
  editor.value = localStorage.textArea;
 } 
}

function clearLocalStorage() {
 localStorage.clear();
 editor.value = "";
}

window.addEventListener("load", getFromLocalStorage);

editor.addEventListener("change", saveToLocalStorage);

clearButton.addEventListener("click", (event) => {
 event.preventDefault();
 clearLocalStorage();
});

"use strict";

const signin = document.getElementById("signin");
const signinForm = document.getElementById("signin__form");
const signinBtn = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const requestURL = "https://netology-slow-rest.herokuapp.com/auth.php";
const methodRequest = "POST";


function sendRequest(method, url) {
 return new Promise((resolve, reject) => {
  const formData = new FormData(signinForm);
  const xhr = new XMLHttpRequest();  
  
  xhr.open(method, url);
  
  xhr.onload = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      resolve(JSON.parse(xhr.responseText));
    } else {
      reject(xhr.response);
    }
  };

  xhr.onerror = () => {
    reject(JSON.parse(xhr.responseText));
  };

  xhr.send(formData);
 });
}

function checkAuth(data) {
 if (data.success) {
  // document.cookie = `userId=${data.user_id}`; вариант с cookie
  localStorage.userId = data.user_id;
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  userId.innerText = data.user_id;
 } else {
  alert("Неверный логин/пароль");
 }  
}

signinBtn.addEventListener("click", (event) => {
  event.preventDefault();
  sendRequest(methodRequest, requestURL)
   .then(data => checkAuth(data))
   .catch(err => console.log(err));  
});

window.addEventListener("DOMContentLoaded", () => {
 if (localStorage.userId) {
  signin.classList.remove("signin_active");
  userId.innerText = localStorage.userId;
  welcome.classList.add("welcome_active");
 }
});
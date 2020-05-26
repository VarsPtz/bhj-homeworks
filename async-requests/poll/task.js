"use strict";

const pollAnswers = document.getElementById("poll__answers");
const pollTitle = document.getElementById("poll__title");
const requestURL = "https://netology-slow-rest.herokuapp.com/poll.php";
const methodRequest = "GET";

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.onload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send();
  });
}

function displayAnswer(data) { 
  pollTitle.innerText = data.data.title;
  
  for (let answer of data.data.answers) {
    const btn = `<button class="poll__answer">${answer}</button>`;
    pollAnswers.insertAdjacentHTML("afterBegin", btn);
  }
  
  return Array.from(document.querySelectorAll(".poll__answer"));
}

sendRequest(methodRequest, requestURL)
  .then((data) => displayAnswer(data))
  .then((data) =>     
     data.forEach(element => {
      element.addEventListener("click", () => {
        alert("Спасибо, ваш голос защитан!");
      });
     })
  )
  .catch((err) => console.log(err));

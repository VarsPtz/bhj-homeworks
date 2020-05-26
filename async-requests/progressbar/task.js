"use strict";

const progress = document.getElementById("progress");
const send = document.getElementById("send");
const formData = new FormData(form);
const xhr = new XMLHttpRequest();

function showProgress(event) {
  event.preventDefault();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.upload.onprogress = function (event) {    
    if (event.lengthComputable) {
     progress.value = event.loaded / event.total;
    }    
  };
  xhr.send(formData);
}

send.addEventListener("click", showProgress);
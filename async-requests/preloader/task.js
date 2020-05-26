"use strict";

const items = document.getElementById("items");
const imgLoader = document.getElementById("loader");
const requestURL = "https://netology-slow-rest.herokuapp.com";
const methodRequest = "GET";


function sendRequest(method, url) {
 return new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.responseType = "json";

  xhr.onload = () => {
   if (xhr.status === 200 && xhr.readyState === 4) {
    imgLoader.classList.remove("loader_active");
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

function displayExchangeRate(data) {
 const currency = data.response.Valute;
 for (let item in currency) {
  const htmlBlock = `
  <div class="item">
    <div class="item__code">
      ${currency[item].CharCode}
    </div>
    <div class="item__value">
      ${currency[item].Value}
    </div>
    <div class="item__currency">
      руб.
    </div>
  </div>`;
  items.insertAdjacentHTML("afterBegin", htmlBlock);
 } 
}

sendRequest(methodRequest, requestURL)
 .then(data => displayExchangeRate(data))
 .catch(err => console.log(err));
"use strict";

const chatWidget = document.querySelector(".chat-widget");
const chatWidgetInput = document.getElementById("chat-widget__input");
const chatWidgetMessages = document.querySelector(".chat-widget__messages");

chatWidget.addEventListener("click", () => {
 chatWidget.classList.add("chat-widget_active");
});


chatWidgetInput.addEventListener("keypress", event => {
  if (event.which == 13 || event.keyCode == 13) {   
   if (notEmpty(event.target.value)) {
     chatWidgetMessages.innerHTML += `
     Сообщение от робота
      <div class="message message_client">
        <div class="message__time">${getDate()}</div>
        <div class="message__text">
          ${event.target.value}
        </div>
      </div>
     `;   
     
     setTimeout(() => {    
      chatWidgetMessages.innerHTML += `
      Сообщение от клиента
        <div class="message">
          <div class="message__time">${getDate()}</div>
          <div class="message__text">
          ${returnAccidentalMessage()}
          </div>
        </div>
      `;     
    }, 1000);
   }
  }
});

function getDate() {
 const currentTime = new Date();
 const hours = checkForNumberOfDigits(currentTime.getHours());
 const minutes = checkForNumberOfDigits(currentTime.getMinutes());
 const seconds = checkForNumberOfDigits(currentTime.getSeconds());
 const day = checkForNumberOfDigits(currentTime.getDate());
 const month = checkForNumberOfDigits(currentTime.getMonth() + 1);

 return `${hours}:${minutes}:${seconds} ${day}-${month}-${currentTime.getFullYear()}`;
}

function checkForNumberOfDigits(data) {
 return (data < 10) ? "0"+ data : data;
}

function notEmpty(data) {
 return (data.trim() != "");
}

function returnAccidentalMessage() {
 const answersRobot = [
   "Добрый день",
   "Я здесь.",
   "Да, я Вас понял.",
   "Ожидайте, оператор ищёт информацию.",
   "Извините, информация не найдена.",
 ];
 const accidentalIndex = Math.floor(Math.random() * answersRobot.length);

 return answersRobot[accidentalIndex];
}
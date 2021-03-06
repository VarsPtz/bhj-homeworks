"use strict";

function countdownTimer() {
    const currentTimer = document.getElementById("timer");

    const arrayCurrentTimer = currentTimer.textContent.split(':');

    let currentTimerToSeconds = ((+arrayCurrentTimer[0] * 3600) + (+arrayCurrentTimer[1] * 60) + (+arrayCurrentTimer[2]));      
    
    if (currentTimerToSeconds > 0) {

      --currentTimerToSeconds;
      
      let outputTimer = "";

      const h = (currentTimerToSeconds / 3600) ^ 0;

      const m = ((currentTimerToSeconds - h * 3600) / 60) ^ 0;

      const s = currentTimerToSeconds - h * 3600 - m * 60;

      outputTimer += (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);

      currentTimer.textContent = outputTimer;
     
    } else {
      clearInterval(timerInterval);
      alert("Вы победили в конкурсе!");

      //task 1.3 download file
      location.assign(
        "https://wdho.ru/9srL?pt=zso5%2BMmSAJLdUf5nlfBVamK3NW9QjE2VDtqE1xP7cY0%3D"
      );
    }
}

const timerInterval = setInterval(countdownTimer, 1000);


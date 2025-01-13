document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const setEventDate = document.getElementById("event-date");
  const setEventTime = document.getElementById("event-time");
  const startCountdownBtn = document.getElementById("start-timer");

  // Countdown function
  function countdown(endDate) {
    let days, hours, minutes, seconds;

    endDate = new Date(endDate).getTime();
    console.log(endDate)
    if (isNaN(endDate)) {
      return;
    }

    let countdownInterval = setInterval(calculate, 1000);
    function calculate() {
      let startDate = new Date().getTime();
      let timeRemaining = parseInt((endDate - startDate) / 1000);
      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400); // Calculate days
        timeRemaining = timeRemaining % 86400;
        hours = parseInt(timeRemaining / 3600); // Calculate hours
        timeRemaining = timeRemaining % 3600;
        minutes = parseInt(timeRemaining / 60); // Calculate minutes
        timeRemaining = timeRemaining % 60;
        seconds = parseInt(timeRemaining); // Calculate seconds

        // Update countdown display
        document.getElementById("days-value").innerHTML =
          days < 10 ? "0" + days : days;
        document.getElementById("hours-value").innerHTML =
          hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes-value").innerHTML =
          minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds-value").innerHTML =
          seconds < 10 ? "0" + seconds : seconds;
      } else {
        clearInterval(countdownInterval); // Stop countdown when time is up
        document.getElementById("days-value").innerHTML = "00";
        document.getElementById("hours-value").innerHTML = "00";
        document.getElementById("minutes-value").innerHTML = "00";
        document.getElementById("seconds-value").innerHTML = "00";
        document.querySelector(".timer-completion-message").style.display =
          "block";
        document.querySelector(".timer-completion-message p").textContent =
          "ITS TIME TO START THE EVENT!";
      }
    }
  }

  // Event listener for start button
  startCountdownBtn.addEventListener("click", () => {
    let eventDate = setEventDate.value;
    let eventTime = setEventTime.value;

    if (eventDate && eventTime) {
      let endDate = `${eventDate}T${eventTime}`;
      countdown(endDate);
    } else {
      alert("Please set both the date and time for the event.");
    }
  });
});

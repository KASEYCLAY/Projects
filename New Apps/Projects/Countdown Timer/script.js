document.addEventListener("DOMContentLoaded", () => {
  // Wait for the full DOM content to load before running the script to ensure all elements are accessible.

  // DOM Elements:
  const setEventDate = document.getElementById("event-date"); // Input element where the user specifies the event date.
  const setEventTime = document.getElementById("event-time"); // Input element where the user specifies the event time.
  const startCountdownBtn = document.getElementById("start-timer"); // Button element that starts the countdown timer when clicked.

  // Countdown Function:
  // This function handles the logic for the countdown timer.
  function countdown(endDate) {
    let days, hours, minutes, seconds; // Variables to store the calculated time values for display.

    // Convert the provided endDate string to a timestamp in milliseconds.
    endDate = new Date(endDate).getTime(); 
    console.log(endDate); // Log the converted timestamp for debugging purposes.

    // If the provided date is invalid (e.g., user enters gibberish), exit the function early.
    if (isNaN(endDate)) {
      return;
    }

    // Start a repeating interval that runs every second (1000 milliseconds) to update the countdown.
    let countdownInterval = setInterval(calculate, 1000);

    // Inner function: calculate the remaining time and update the DOM accordingly.
    function calculate() {
      // Get the current timestamp in milliseconds.
      let startDate = new Date().getTime();

      // Calculate the difference between the endDate and the current timestamp in seconds.
      let timeRemaining = parseInt((endDate - startDate) / 1000); 

      // If there is time remaining, perform calculations and update the display.
      if (timeRemaining >= 0) {
        // Calculate the number of full days left.
        days = parseInt(timeRemaining / 86400); // 1 day = 86400 seconds.
        timeRemaining = timeRemaining % 86400; // Remainder after removing full days.

        // Calculate the number of full hours left after removing days.
        hours = parseInt(timeRemaining / 3600); // 1 hour = 3600 seconds.
        timeRemaining = timeRemaining % 3600; // Remainder after removing full hours.

        // Calculate the number of full minutes left after removing hours.
        minutes = parseInt(timeRemaining / 60); // 1 minute = 60 seconds.
        timeRemaining = timeRemaining % 60; // Remainder after removing full minutes.

        // Remaining seconds that don’t make up a full minute.
        seconds = parseInt(timeRemaining);

        // Update the DOM elements with the calculated values.
        // If any value is a single digit (e.g., 4), prepend a "0" for consistency (e.g., "04").
        document.getElementById("days-value").innerHTML =
          days < 10 ? "0" + days : days;
        document.getElementById("hours-value").innerHTML =
          hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes-value").innerHTML =
          minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds-value").innerHTML =
          seconds < 10 ? "0" + seconds : seconds;
      } else {
        // If the remaining time has reached zero or negative:
        clearInterval(countdownInterval); // Stop the countdown timer by clearing the interval.

        // Reset the display to "00" for all units.
        document.getElementById("days-value").innerHTML = "00";
        document.getElementById("hours-value").innerHTML = "00";
        document.getElementById("minutes-value").innerHTML = "00";
        document.getElementById("seconds-value").innerHTML = "00";

        // Show a completion message by modifying the style and text content of the relevant DOM element.
        document.querySelector(".timer-completion-message").style.display =
          "block"; // Make the message container visible.
        document.querySelector(".timer-completion-message p").textContent =
          "ITS TIME TO START THE EVENT!"; // Display the event start message.
      }
    }
  }

  // Event Listener:
  // Attach an event listener to the start button to begin the countdown when clicked.
  startCountdownBtn.addEventListener("click", () => {
    let eventDate = setEventDate.value; // Get the date value input by the user.
    let eventTime = setEventTime.value; // Get the time value input by the user.

    // Check if both date and time values are provided before proceeding.
    if (eventDate && eventTime) {
      // Combine the date and time into a single string in ISO 8601 format (YYYY-MM-DDTHH:mm).
      let endDate = `${eventDate}T${eventTime}`;

      // Call the countdown function with the combined end date/time string.
      countdown(endDate);
    } else {
      // If either the date or time is missing, alert the user to provide both inputs.
      alert("Please set both the date and time for the event.");
    }
  });
});

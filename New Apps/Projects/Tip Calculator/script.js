// Wait for the entire DOM to be fully loaded and parsed before running the script
document.addEventListener("DOMContentLoaded", () => {
  // DOM elements - these are references to specific elements in the HTML
  const setBillAmount = document.getElementById("bill-amount"); // Input field for the total bill amount
  const fivePercent = document.getElementById("five-percent"); // Radio button for selecting a 5% tip
  const tenPercent = document.getElementById("ten-percent"); // Radio button for selecting a 10% tip
  const fifteenPercent = document.getElementById("fifteen-percent"); // Radio button for selecting a 15% tip
  const twentyPercent = document.getElementById("twenty-percent"); // Radio button for selecting a 20% tip
  const peopleSlider = document.getElementById("people"); // Slider input to specify the number of people sharing the tip
  const peopleValue = document.getElementById("people-value"); // Display for the current value of the number of people from the slider
  const submitButton = document.getElementById("submit"); // Button to calculate the tip when clicked
  const resetButton = document.getElementById("reset"); // Button to reset all inputs and outputs to their default states
  const tipPerPersonDisplay = document.getElementById("tip-per-person"); // Display for the calculated tip amount per person
  const totalTipDisplay = document.getElementById("total-tip"); // Display for the total calculated tip amount

  // Initialize the display for the number of people with the initial slider value
  peopleValue.textContent = peopleSlider.value; // Sets the default display text to match the slider's current value

  // Event listener to update the displayed number of people dynamically
  peopleSlider.addEventListener("input", () => {
    console.log("Slider value:", peopleSlider.value); // Logs the slider value to the console for debugging
    peopleValue.textContent = peopleSlider.value; // Updates the display to show the current slider value
  });

  // Function to calculate and display the tip
  const calculateAndDisplayTip = () => {
    // Retrieve the entered bill amount and convert it from string to float
    let billAmount = parseFloat(setBillAmount.value); // Using `parseFloat` to ensure decimal numbers are handled
    if (isNaN(billAmount) || billAmount <= 0) {
      // Check if input is invalid (not a number)
      alert("Please enter a valid bill amount."); // Notify the user of incorrect input
      return; // Exit the function to prevent further calculations
    }

    // Determine the selected tip percentage by checking which radio button is selected
    let tipPercentage = 0; // Default to 0; this will remain unchanged if no button is selected
    if (fivePercent.checked) tipPercentage = 5; // Check if the 5% radio button is selected
    if (tenPercent.checked) tipPercentage = 10; // Check if the 10% radio button is selected
    if (fifteenPercent.checked) tipPercentage = 15; // Check if the 15% radio button is selected
    if (twentyPercent.checked) tipPercentage = 20; // Check if the 20% radio button is selected

    if (tipPercentage === 0) {
      // Handle cases where no tip percentage is selected
      alert("Please select a tip percentage."); // Notify the user
      return; // Exit the function to prevent further calculations
    }

    // Get the number of people sharing the bill from the slider input
    let numberOfPeople = parseInt(peopleSlider.value); // Convert the slider value from string to integer

    // Calculate the total tip amount based on the bill and tip percentage
    let totalTip = (billAmount * tipPercentage) / 100; // Use percentage formula: (amount * percent) / 100

    // Calculate the tip amount per person by dividing the total tip by the number of people
    let tipPerPerson = totalTip / numberOfPeople;

    // Update the UI for total tip and tip per person
    totalTipDisplay.textContent = `£${totalTip.toFixed(2)}`; // Display total tip (rounded to two decimal places)
    tipPerPersonDisplay.textContent = `£${tipPerPerson.toFixed(2)}`; // Display tip per person (rounded to two decimal places)
  };

  // Event listener for the calculate button
  submitButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents any default behavior, such as form submission
    calculateAndDisplayTip(); // Call the function to calculate the tip
  });

  // Event listener for the reset button to clear all values and return to the default state
  resetButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents any default behavior, such as form submission
    document.getElementById("tip-calculator-form").reset(); // Reset all form elements to their initial values
    peopleValue.textContent = peopleSlider.value; // Reset the slider display value to match the slider's position
    totalTipDisplay.textContent = "£0.00"; // Reset total tip display
    tipPerPersonDisplay.textContent = "£0.00"; // Reset per-person tip display
  });
});

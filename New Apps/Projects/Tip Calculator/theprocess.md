# Step-by-Step Guide: How I Implemented a Tip Calculator in JavaScript/HTML

This guide outlines what I did to successfully implement a tip calculator using JavaScript. Follow along to see the steps I took to create a working tip calculator.

---

## 1. Created the Basic HTML Structure

1.1. I opened my text editor and created a new HTML file (e.g., `index.html`).

1.2. I added the following form layout: BELOW

1.3. I added a new CSS file (e.g., `style.css`) to style the calculator for a polished look.

1.4. I linked it in the HTML:

```html
<form id="tip-calculator-form">
    <input id="bill-amount" type="number" placeholder="Enter Bill Amount" />
    
    <!-- Radio buttons for selecting tip percentages -->
    <input id="five-percent" type="radio" name="tip" /> 5%
    <input id="ten-percent" type="radio" name="tip" /> 10%
    <input id="fifteen-percent" type="radio" name="tip" /> 15%
    <input id="twenty-percent" type="radio" name="tip" /> 20%
    
    <!-- Slider for the number of people -->
    <input id="people" type="range" min="1" max="20" />
    <span id="people-value"></span>
    
    <!-- Buttons -->
    <button id="submit">Calculate Tip</button>
    <button id="reset">Reset</button>
    
    <!-- Displays -->
    <div id="total-tip">£0.00</div>
    <div id="tip-per-person">£0.00</div>
</form>
```

This structure provided input fields for the bill amount, tip percentages, and the number of people, along with buttons and displays for calculated results.

---

## 2. Linked the JavaScript File

2.1. I created a new JavaScript file (e.g., `script.js`) in the same folder as my HTML file.

2.2. I linked it to my HTML by adding this tag before the closing `</body>` tag:

```html
<script src="script.js"></script>
```

---

## 3. Waited for the DOM to Load

3.1. I started my JavaScript file with the following event listener to ensure the script interacts with the HTML only after it has fully loaded:

```javascript
document.addEventListener("DOMContentLoaded", () => {
    // Code went here.
});
```

---

## 4. Accessed DOM Elements

4.1. I used `getElementById` to access each relevant HTML element and assigned them to variables inside the `DOMContentLoaded` block:

```javascript
const setBillAmount = document.getElementById("bill-amount");
const fivePercent = document.getElementById("five-percent");
const tenPercent = document.getElementById("ten-percent");
const fifteenPercent = document.getElementById("fifteen-percent");
const twentyPercent = document.getElementById("twenty-percent");
const peopleSlider = document.getElementById("people");
const peopleValue = document.getElementById("people-value");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const tipPerPersonDisplay = document.getElementById("tip-per-person");
const totalTipDisplay = document.getElementById("total-tip");
```

---

## 5. Updated the Slider Dynamically

5.1. I added an event listener to update the displayed slider value:

```javascript
peopleSlider.addEventListener("input", () => {
    peopleValue.textContent = peopleSlider.value; // Updates the display
});
```

5.2. I initialized the slider display when the page loaded:

```javascript
peopleValue.textContent = peopleSlider.value; // Sets the default value
```

---

## 6. Implemented the Tip Calculation Logic

6.1. I created a function `calculateAndDisplayTip` to handle calculations:

```javascript
const calculateAndDisplayTip = () => {
    // Retrieve and validate bill amount
    let billAmount = parseFloat(setBillAmount.value);
    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    // Get the selected tip percentage
    let tipPercentage = 0;
    if (fivePercent.checked) tipPercentage = 5;
    if (tenPercent.checked) tipPercentage = 10;
    if (fifteenPercent.checked) tipPercentage = 15;
    if (twentyPercent.checked) tipPercentage = 20;
    if (tipPercentage === 0) {
        alert("Please select a tip percentage.");
        return;
    }

    // Calculate total tip and per-person tip
    let numberOfPeople = parseInt(peopleSlider.value);
    let totalTip = (billAmount * tipPercentage) / 100;
    let tipPerPerson = totalTip / numberOfPeople;

    // Update the display
    totalTipDisplay.textContent = `£${totalTip.toFixed(2)}`;
    tipPerPersonDisplay.textContent = `£${tipPerPerson.toFixed(2)}`;
};
```

---

## 7. Handled User Actions

7.1. I added an event listener to calculate the tip when the "Calculate" button was clicked:

```javascript
submitButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents form submission
    calculateAndDisplayTip(); // Perform the calculation
});
```

7.2. I added an event listener to reset all fields and displays when the "Reset" button was clicked:

```javascript
resetButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents form submission
    document.getElementById("tip-calculator-form").reset(); // Reset the form
    peopleValue.textContent = peopleSlider.value; // Reset slider display
    totalTipDisplay.textContent = "£0.00"; // Reset tip display
    tipPerPersonDisplay.textContent = "£0.00"; // Reset per-person tip
});
```

---

## 8. Tested My Tip Calculator

8.1. I opened the HTML file in a web browser.

8.2. I inputted various values to test:
   - Entered different bill amounts.
   - Selected various tip percentages.
   - Adjusted the number of people.

8.3. I ensured edge cases were handled (e.g., missing inputs or invalid values). - TBC

--- This is something, I can improve on if needed 

```html
<link rel="stylesheet" href="style.css" />
```

---
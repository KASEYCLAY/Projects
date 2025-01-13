# Tip Calculator Specification

## Objective
Create a Tip Calculator that computes the tip amount and total bill based on user inputs for the bill amount and tip percentage.

---

## Features
### Core Features
1. **Input Fields**:
   - `Bill Amount`: Numeric input for the pre-tip bill total.
   - `Tip Percentage`: Numeric input for the tip percentage (e.g., 15 for 15%).

2. **Output Fields**:
   - `Tip Amount`: Displays the calculated tip.
   - `Total Bill`: Displays the total bill (Bill + Tip).

3. **Interaction**:
   - The app updates outputs dynamically or when the user clicks "Calculate."

### Optional Features
1. Predefined tip percentages (e.g., 10%, 15%, 20%).
2. Input for splitting the bill among multiple people.
3. A reset button to clear all inputs and outputs.
4. Responsive design for mobile and desktop.

---

## Best Practices
1. **Code Organization**:
   - Structure your code with separate concerns (HTML for layout, CSS for styling, and JavaScript for functionality).
   - Use consistent naming for variables and functions (e.g., `billAmount`, `tipPercentage`).

2. **Validation**:
   - Check for valid and non-negative numbers in all inputs.
   - Display clear and user-friendly error messages if validation fails.

3. **User Experience**:
   - Ensure inputs are easy to understand (e.g., labels and placeholders).
   - Show the results dynamically for instant feedback.

4. **Reusability and Clean Code**:
   - Write functions for repetitive logic (e.g., a reusable calculation function).
   - Keep styling in a separate CSS file.
   - Use comments to explain logic in your JavaScript.

5. **Accessibility**:
   - Use semantic HTML for better screen reader support.
   - Ensure proper keyboard navigation and color contrast.

---

## Development Plan: Step-by-Step

### Step 1: **Setup and Plan**
1. Create an HTML file to define the basic structure.
2. List the elements you'll need (e.g., input fields, labels, output sections).
3. Draft the calculator layout using simple static HTML.

### Step 2: **Basic Layout (HTML)**
1. Create an input field for:
   - Bill amount.
   - Tip percentage.
2. Add placeholders for:
   - Tip amount.
   - Total bill.
3. Optionally include a "Calculate" button.

Example:
```html
<input id="billAmount" placeholder="Enter bill amount" type="number" />
<input id="tipPercentage" placeholder="Enter tip percentage" type="number" />
<div id="tipAmount">Tip: $0.00</div>
<div id="totalBill">Total: $0.00</div>

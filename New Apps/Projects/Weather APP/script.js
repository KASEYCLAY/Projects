// Load content on session start
document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const searchForCity = document.querySelector("city-input");
    const displayWeather = document.querySelector("weather-display");
    const locationName = document.querySelector("location-name");
    const theTemperature = document.querySelector("temperature");
    const theCondition = document.querySelector("condition");
    const theHumidity = document.querySelector("humidity");
    const theWind = document.querySelector("wind");
    const fiveDayForecast = document.querySelector("forecast-container");
  
    // API constants
    const apiKey = "YOUR_API_KEY_HERE"; // Replace with your WeatherAPI key
    const baseApiUrl = "https://api.weatherapi.com/v1"; // Base URL for WeatherAPI

// Step 3: Add an event listener for the search form
// Capture the city name from the input and call the function to fetch weather data



// Step 4: Implement a function to fetch current weather data
// - Use the WeatherAPI endpoint for current weather
// - Pass the city name as a query parameter
// - Ensure the API call includes error handling (e.g., invalid city, no response)



// Step 5: Parse and display current weather data
// - Extract temperature, condition, weather icon, wind speed, and humidity
// - Display these details in their respective DOM elements
// - Format additional information (e.g., wind direction, condition description)



// Step 6: Add geolocation functionality for current location
// - Use the browser’s geolocation API to get the user's latitude and longitude
// - Pass the coordinates to the WeatherAPI endpoint
// - Fetch and display weather data for the user's current location
// - Include error handling in case location access is denied



// Step 7: Optional - Add a 5-day weather forecast feature
// - Use the API endpoint for forecast data
// - Parse and extract daily temperature trends and weather conditions
// - Display this data dynamically in a container
// - Optionally use a chart library (e.g., Chart.js) for a visual representation



// Step 8: Create dynamic UI features
// - Add responsive styles for different devices (mobile, tablet, desktop)
// - Set background images dynamically based on the weather condition (e.g., sunny, rainy)
// - Include animations or transitions for smoother UI interactions



// Step 9: Implement error handling
// - Display an error message for invalid locations or API issues (e.g., rate limits)
// - Ensure the app doesn’t break when API errors occur



// Step 10: Add performance improvements
// - Cache recent search results in session storage to minimise API calls
// - Create a debounce mechanism to limit rapid API calls during input
// - Optimise the app for faster loads, e.g., using smaller icons and deferred scripts



// Step 11: Optional - Implement favourites functionality
// - Allow users to save favourite locations to local storage
// - Provide quick access buttons to fetch weather data for those locations



// Step 12: Add time-based and unit-based functionality
// - Change the UI theme dynamically based on the time of day
// - Add a toggle for Celsius/Fahrenheit in temperature display



// Step 13: Test thoroughly across environments
// - Test functionality for valid and invalid city names
// - Verify geolocation behaviour for different user permissions
// - Ensure responsive and cross-browser compatibility


});
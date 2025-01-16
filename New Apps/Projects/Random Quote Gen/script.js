document.addEventListener("DOMContentLoaded", () => {
    // Buttons
    const getQuoteBtn = document.getElementById("new-quote"); // Button to fetch and display a new quote
    const resetQuoteBtn = document.getElementById("reset-quote"); // Button to reset the displayed quote and author
    const donotPushBtn = document.getElementById("dont-push"); // Button for a redirect action (placeholder)
    const pinQuoteBtn = document.getElementById("pin-quote"); // Button to pin the quote using local storage
  
    // Quote and author display elements
    const theQuote = document.getElementById("quote-display"); // Element to display the quote
    const theAuthor = document.getElementById("author-display"); // Element to display the author
  
    // Quotes and authors array
    const quotes = [
      "Be yourself; everyone else is already taken.",
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      "In three words I can sum up everything I've learned about life: it goes on.",
      "If you tell the truth, you don't have to remember anything.",
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      "To live is the rarest thing in the world. Most people exist, that is all.",
      "Without music, life would be a mistake.",
      "Always forgive your enemies; nothing annoys them so much.",
      "We accept the love we think we deserve.",
      "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
      "It is never too late to be what you might have been.",
      "Do what you can, with what you have, where you are.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      "Happiness is not something ready made. It comes from your own actions.",
      "Don't cry because it's over, smile because it happened.",
      "Not all those who wander are lost.",
      "The only way to do great work is to love what you do.",
      "You must be the change you wish to see in the world.",
      "Believe you can and you're halfway there."
    ];
    const authors = [
      "Oscar Wilde",
      "Albert Einstein",
      "Robert Frost",
      "Mark Twain",
      "Martin Luther King Jr.",
      "Oscar Wilde",
      "Friedrich Nietzsche",
      "Oscar Wilde",
      "Stephen Chbosky",
      "Marilyn Monroe",
      "George Eliot",
      "Theodore Roosevelt",
      "Winston Churchill",
      "Ralph Waldo Emerson",
      "Dalai Lama",
      "Dr. Seuss",
      "J.R.R. Tolkien",
      "Steve Jobs",
      "Mahatma Gandhi",
      "Theodore Roosevelt"
    ];
  
    // Function to fetch and display a new random quote
    function newQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length); // Generate a random index
      theQuote.textContent = quotes[randomIndex]; // Display the corresponding quote
      theAuthor.textContent = `- ${authors[randomIndex]}`; // Display the corresponding author
    }
  
    // Function to reset the quote display
    function resetQuote() {
      theQuote.textContent = ""; // Clear the quote
      theAuthor.textContent = ""; // Clear the author
    }
  
    // Event listener for fetching a new quote
    getQuoteBtn.addEventListener("click", () => {
      newQuote(); // Fetch and display a new quote
    });
  
    // Event listener for resetting the quote display
    resetQuoteBtn.addEventListener("click", () => {
      resetQuote(); // Reset the quote and author display
    });
  
    // Event listener for "Don't Push" button (placeholder action)
    donotPushBtn.addEventListener("click", () => {
      window.location.href = "https://example.com"; // Redirect to a placeholder URL
    });
  
    // Event listener for pinning a quote (saving to local storage)
    pinQuoteBtn.addEventListener("click", () => {
      const pinnedQuote = {
        quote: theQuote.textContent,
        author: theAuthor.textContent
      };
      localStorage.setItem("pinnedQuote", JSON.stringify(pinnedQuote)); // Save the quote in local storage
      alert("Quote pinned!"); // Notify the user
    });
  
    // (Optional) On page load, check for a pinned quote and display it
    const savedQuote = JSON.parse(localStorage.getItem("pinnedQuote"));
    if (savedQuote) {
      theQuote.textContent = savedQuote.quote;
      theAuthor.textContent = savedQuote.author;
    }
  });
  
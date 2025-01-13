document.addEventListener("DOMContentLoaded", () => {
  //* DOM element references
  const guessInput = document.getElementById("guess-input");
  const guessBtn = document.getElementById("guess-btn");
  const message = document.getElementById("message");
  const attemptsSpan = document.getElementById("attempts");
  const highScoreSpan = document.getElementById("high-score");
  const newGameBtn = document.getElementById("new-game-btn");

  //* Game state variables
  let secretNumber;
  let attempts;
  let gameOver;
  let highScore = localStorage.getItem("highScore") || "-";

  function initGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;

    //* Reset UI state
    message.textContent = "";
    message.className = "message";
    attemptsSpan.textContent = attempts;
    highScoreSpan.textContent = highScore;
    guessInput.value = "";

    //* Toggle button visibility and input states
    newGameBtn.classList.add("hidden");
    guessInput.disabled = false;
    guessBtn.disabled = false;
    guessInput.focus();
  }

  function updateHighscore() {
    const currentScore = parseInt(highScore);
    if (highScore === "-" || attempts < currentScore) {
      highScore = attempts.toString();
      localStorage.setItem("highscore", highScore);
      highScoreSpan.textContent = highScore;
    }
  }

  function onGuess() {
    if (gameOver) return;
    const userInput = parseInt(guessInput.value);

    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
      message.textContent = "Please enter a valid number between 1 and 100";
      message.className = "message error";
      return;
    }
    attempts++;
    attemptsSpan.textContent = attempts;

    if (userInput === secretNumber) {
      handleWin();
    } else {
      handleLoss(userInput);
    }
    guessInput.value = "";
    guessInput.focus = "";
  }

  function handleWin() {
    message.textContent = `You win! you found it in ${secretNumber}`;
    message.className = "message success";
    gameOver = true;
    updateHighscore();
    newGameBtn.classList.remove("hidden");
    guessInput.disabled = true;
    guessBtn.disabled = true;
  }

  function handleLoss(userInput) {
    const hint = userInput < secretNumber ? "Higher" : "Lower";
    message.textContent = `Try a ${hint} number`;
    message.className = "message";
  }
  //* Event listeners
  guessBtn.addEventListener("click", onGuess);
  guessInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") onGuess();
  });
  guessInput.addEventListener("click", initGame);

  initGame();
});
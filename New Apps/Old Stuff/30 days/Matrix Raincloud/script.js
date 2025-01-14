// Function to create a "numbers rain" animation effect on the canvas
document.addEventListener("DOMContentLoaded", createNumbersRain);
function createNumbersRain() {
    const canvas = document.getElementById("matrixCanvas"); // Get the canvas element by its ID
    const ctx = canvas.getContext("2d"); // Get the 2D rendering context for drawing

    // Set the canvas size to match the full screen dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 30; // Size of the font for the falling numbers
    const columns = canvas.width / fontSize; // Calculate the number of columns based on font size
    const drops = Array(Math.floor(columns)).fill(1); // Create an array of drop positions for each column, initialized to 1

    // Function to draw the animation frame by frame
    function draw() {
        // Draw a semi-transparent black rectangle over the entire canvas for fade effect
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "rgb(209, 0, 0)"; // Set the text color to green (matrix effect)
        ctx.font = fontSize + "px verdarna"; // Set the font style and size

        // Loop through each column of drops
        for (let i = 0; i < drops.length; i++) {
            const text = Math.floor(Math.random() * 10); // Generate a random digit (0-9)
            const x = i * fontSize; // Calculate the x-coordinate based on column index and font size
            const y = drops[i] * fontSize; // Calculate the y-coordinate based on drop position

            ctx.fillText(text, x, y); // Draw the text at the calculated position

            // If the drop goes off-screen and the random condition is met, reset its position
            if (y > canvas.height && Math.random() > 0.925) {
                drops[i] = 0;
            }

            drops[i]++; // Increment the drop position
        }
    }

    setInterval(draw, 50); // Redraw the frame every 50 milliseconds
}

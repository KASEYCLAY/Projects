# Step 1

I made the code wait till the web page fully loads before it does anything. This makes sure that all the buttons and input boxes are ready to use. If it starts to early, the code might try to work with something thats not even there yet, which would break it.

# Step 2

Why Select Specific Elements?
The code grabs specific parts of the page using their id, because these are the pieces we need:
The event-date box is where I type in when the event happens.
The event-time box is where I add the time for the event.
The start-timer button is what starts the whole countdown.
This makes it easy to control what happens based on Ir inputs and clicks.

# Step 3

How the Countdown Works and Why I Set It Up That Way:
The countdown is the main part of the code. It checks how much time is left every second until Ir event happens.
I split it into days, hours, minutes, and seconds because thats how people usually see countdowns. It’s also cool to watch it change in real time!

# Step 4

Why Convert the Date and Time?
The date and time I type in are turned into a computer-friendly format. This makes it possible for the code to figure out how much time is left. Without this step, it just wouldn’t work.

# Step 5

Handling Errors in Date and Time:
I made the code stop itself if I type in a date or time that doesn’t make sense (or forget to fill in either). This way, it won’t keep running and crash. Nobody likes errors.

# Step 6

Why Use setInterval to Update?
I used setInterval because it’s perfect for running something every second. The countdown stays up to date all by itself, and I don’t have to code something super complicated to keep it accurate.

# Step 7

How I Calculated Time Left:
I calculated time like this:
Days: The leftover time is divided by how many seconds are in a day.
Hours, Minutes, Seconds: I used what was left after figuring out the bigger units.
This makes the timer work cleanly and looks good on the page.

# Step 8

Updating the Page:
I wanted the countdown numbers to look good, so if any number is less than 10, I added a 0. It just looks nicer when it says 09 instead of just 9.

# Step 9

Stopping the Countdown:
When the countdown reaches zero, I used clearInterval to stop it from keeping running. No point in counting down to negative numbers!

# Step 10

Adding the Event Message:
After the countdown finishes, it says ITS TIME TO START THE EVENT!. I added this so I know when it’s time. It’s a fun little touch that makes it feel complete.

# Step 11

Why Include a Start Button?
I wanted to give myself over the timer. So, the Start Timer button lets me begin the countdown whenever I’re ready. When I click it, the code checks mer inputs and then gets to work.

# Step 12

Why Validate our Inputs?
If I leave the date or time blank, the code shows a message saying you need to fill them in. It’s better to check this upfront than let the countdown break later.

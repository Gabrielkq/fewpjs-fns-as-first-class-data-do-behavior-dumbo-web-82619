/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeinput) {
  const hour = parseInt(timeinput);
  if (hour < 12) return "Good Morning";
  if (hour > 17) return "Good Evening";
  return "Good Afternoon";
}

function displayMessage(message) {
  document.querySelector("#greeting").innerText = message;
}


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

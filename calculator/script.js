const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("clear")) {
      display.value = ""; // clear display
    } 
    else if (button.classList.contains("backspace")) {
      display.value = display.value.slice(0, -1); // remove last char
    } 
    else if (button.classList.contains("equal")) {
      try {
        display.value = eval(display.value); // calculate
      } catch {
        display.value = "Error";
      }
    } 
    else {
      display.value += value; // append numbers/operators
    }
  });
});

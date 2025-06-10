let currentValue = "";
let previousValue = "";
let operation = null;
const inputBox = document.getElementById("inputBox");

function appendToInput(value) {
  if (inputBox.value === "0" && value !== ".") {
    inputBox.value = value;
  } else {
    inputBox.value += value;
  }
}
// Function to handle operation setting
function setOperation(op) {
  if (operation !== null) {
    calculate();
  }
  previousValue = inputBox.value; // Stores the current value
  operation = op; // Set the operation
  inputBox.value = "0"; // Reset the input box for the next number
}

function calculate() {
  const a = parseFloat(previousValue);
  const b = parseFloat(inputBox.value);
  let result;

  if (isNaN(a) || isNaN(b)) {
    return; // Ensure valid input
  }

  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b !== 0 ? a / b : "Error"; // Prevent division by zero
      break;
    default:
      return;
  }

  inputBox.value = result;
  previousValue = ""; // Reset values
  operation = null;
}

function clearInput() {
  inputBox.value = "0"; // Reset the input box
  previousValue = ""; // Reset previous value
  operation = null; // Reset operation
}
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (
    !isNaN(key) ||
    ["+", "-", "*", "/", ".", "Enter", "Escape", "=", "c", "C"].includes(key)
  ) {
    event.preventDefault();

    if (!isNaN(key) || key === ".") {
      appendToInput(key); // Append number or dot
    } else if (["+", "-", "*", "/"].includes(key)) {
      setOperation(key);
    } else if (key === "Enter") {
      calculate();
    } else if (key === "Escape") {
      clearInput(); // Clear input
    }
  }
});

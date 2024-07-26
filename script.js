document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  let currentInput = "";
  let operator = "";
  let previousInput = "";

  function updateDisplay() {
    display.value = currentInput || "0";
  }

  function calculate() {
    try {
      // Evaluate the expression and update the display
      currentInput = eval(currentInput) || "";
      updateDisplay();
    } catch (e) {
      display.value = "Error";
    }
  }

  function handleButtonClick(event) {
    const value = event.target.textContent;

    if (value >= "0" && value <= "9") {
      currentInput += value;
    } else if (value === ".") {
      if (!currentInput.includes(".")) {
        currentInput += value;
      }
    } else if (value === "C") {
      currentInput = "";
    } else if (value === "=") {
      calculate();
      return; // Prevent adding '=' to the input
    } else {
      // Handle operators
      if (
        currentInput &&
        !["+", "-", "*", "/"].includes(currentInput.slice(-1))
      ) {
        currentInput += value;
      }
    }

    updateDisplay();
  }

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  updateDisplay();
});

import { $, ElementNotFoundError } from "./dom-system.js";

const DOM = {};

try {
  DOM.btn = $("#ex5_btn");
  DOM.resetBtn = DOM.btn.closest(".card").querySelector(".reset");

  DOM.tens = $("#tens");
  DOM.units = $("#units");
  DOM.result = $("#result");
  DOM.input = $("#num_input");
} catch (error) {
  if (error instanceof ElementNotFoundError) {
    console.error(error.message);
  } else {
    console.error("Something went wrong: ", error.message);
  }
}

const reset = () => {
  DOM.tens.textContent = "0";
  DOM.units.textContent = "0";
  DOM.result.textContent = "0";
  DOM.input.value = "";
};

DOM.resetBtn.addEventListener("click", reset);

DOM.btn.addEventListener("click", () => {
  const number = parseInt(DOM.input.valueAsNumber);

  if (isNaN(number) || number < 10 || number > 99) {
    alert("Please enter a valid 2-digit number (10-99)!");
    reset();
    return;
  }

  const tensNumber = Math.floor(number / 10);
  const unitsNumber = number % 10;

  DOM.tens.textContent = `${tensNumber}`;
  DOM.units.textContent = `${unitsNumber}`;
  DOM.result.textContent = `${tensNumber + unitsNumber}`;
});

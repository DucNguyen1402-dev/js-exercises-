import { $, ElementNotFoundError } from "./dom-system.js";

const DOM = {};

try {
  DOM.btn = $("#ex4_btn");
  DOM.resetBtn = DOM.btn.closest(".card").querySelector(".reset");
  DOM.lengthInput = $("#length_input");
  DOM.widthInput = $("#width_input");
  DOM.areaResult = $("#area_result");
  DOM.perimeterResult = $("#perimeter_result");
} catch (error) {
  if (error instanceof ElementNotFoundError) {
    console.error(error.message);
  } else {
    console.error("Something went wrong: ", error.message);
  }
}

const reset = () => {
  DOM.lengthInput.value = "";
  DOM.widthInput.value = "";
  DOM.areaResult.textContent = "0";
  DOM.perimeterResult.textContent = "0";
};

const isInvalid = (...nums) => nums.some((n) => isNaN(n) || n <= 0);

DOM.resetBtn.addEventListener("click", reset);

DOM.btn.addEventListener("click", () => {
  const length = DOM.lengthInput.valueAsNumber;
  const width = DOM.widthInput.valueAsNumber;

  if (isInvalid(length, width)) {
    alert("Please enter valid positive numbers!");
    reset();
    return;
  }

  DOM.areaResult.textContent = length * width;
  DOM.perimeterResult.textContent = 2 * (length + width);
});

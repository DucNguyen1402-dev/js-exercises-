import { $, ElementNotFoundError } from "./dom-system.js";

const DOM = {};

try {
  DOM.btn = $("#ex1_btn");
  DOM.input = $("#ex1_input");
  DOM.display = $("#ex1_output");
  DOM.resetBtn = DOM.btn.closest(".card").querySelector(".reset");
} catch (error) {
  if (error instanceof ElementNotFoundError) {
    console.error(error.message);
  } else {
    console.error("Something went wrong: ", error.message);
  }
}

const RATE = 100000;

const reset = () => {
  DOM.display.innerText = "0 đ";
  DOM.input.value = "";
};

DOM.resetBtn.addEventListener("click", reset);

// calculate
DOM.btn.addEventListener("click", () => {
  const days = DOM.input.valueAsNumber;

  if (Number.isNaN(days)) {
    alert("Your input value is not a number! Please Try again.");
    reset();
    return;
  }
  if (days <= 0) {
    alert("The days can't be nagative! Please enter a valid positive number");
    reset();
    return;
  }

  const salary = days * RATE;
  DOM.display.innerText = `${salary.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })}`;
});

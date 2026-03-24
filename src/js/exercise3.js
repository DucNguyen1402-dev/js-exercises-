import { $, ElementNotFoundError } from "./dom-system.js";

const DOM = {};

try {
  DOM.btn = $("#ex3_btn");
  DOM.resetBtn = DOM.btn.closest(".card").querySelector(".reset");
  DOM.display = $("#ex3_output");
  DOM.input = $("#usd_input");
} catch (error) {
  if (error instanceof ElementNotFoundError) {
    console.error(error.message);
  } else {
    console.error("Something went wrong: ", error.message);
  }
}

// reset
const reset = () => {
  DOM.display.innerText = "0 đ";
  DOM.input.value = "";
};

DOM.resetBtn.addEventListener("click", reset);

DOM.btn.addEventListener("click", () => {
  const usd = DOM.input.valueAsNumber;
  const exchangeRate = 26300;

  if (isNaN(usd) || usd < 0) {
    alert("Please enter a valid positive number!");
    reset();
    return;
  }

  const vnd = usd * exchangeRate;

  DOM.display.innerText = `${vnd.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })}`;
});

import { $, ElementNotFoundError } from "./dom-system.js";

const DOM = {};

try {
  DOM.btn = $("#ex2_btn");
  DOM.resetBtn = DOM.btn.closest(".card").querySelector(".reset");
  DOM.display = $("#ex2_output");
  DOM.listInput = Array.from({ length: 5 }, (_, i) => $(`#num${i + 1}`));
} catch (error) {
  if (error instanceof ElementNotFoundError) {
    console.error(error.message);
  } else {
    console.error("Something went wrong: ", error.message);
  }
}

const reset = () => {
  DOM.display.innerText = "0";
  DOM.listInput.forEach((input) => (input.value = ""));
  for (const input of DOM.listInput) {
    input.classList.remove(
      "bg-rose-500",
      "text-gray-100",
      "placeholder:text-gray-100",
    );
    input.classList.add("placeholder:text-gray-400");
  }
};

DOM.resetBtn.addEventListener("click", reset);

// calculate
DOM.btn.addEventListener("click", () => {
  const emptyInputs = DOM.listInput.filter(
    (input) => input.value.trim() === "",
  );

  if (emptyInputs.length !== 0) {
    for (const emptyInput of emptyInputs) {
      emptyInput.classList.add(
        "bg-rose-500",
        "text-gray-100",
        "placeholder:text-gray-100",
      );
      emptyInput.classList.remove("placeholder:text-gray-400");
    }
    return;
  } else {
    for (const input of DOM.listInput) {
      input.classList.remove(
        "bg-rose-500",
        "text-gray-100",
        "placeholder:text-gray-100",
      );
      input.classList.add("placeholder:text-gray-400");
    }
  }

  const numbers = DOM.listInput.map((input) => parseFloat(input.value) || 0);

  const average = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;

  DOM.display.innerText = average.toFixed(2);
});

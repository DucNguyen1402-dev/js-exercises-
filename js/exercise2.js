const btn = document.getElementById("ex2_btn");
const resetBtn =  btn.closest(".card").querySelector(".reset");

const display = document.getElementById("ex2_output");

const listInput = Array.from({ length: 5 }, (_, i) =>
  document.getElementById(`num${i + 1}`),
);

const reset = () => {
  display.innerText = "0";
  listInput.forEach((input) => input.value = "");
};

resetBtn.addEventListener("click", reset);

// calculate
btn.addEventListener("click", () => {
  const emptyInputs = listInput.filter((input) => input.value.trim() === "");

  if (emptyInputs.length !== 0) {
    for (const emptyInput of emptyInputs) {
      emptyInput.classList.add("bg-rose-500", "text-white");
    }
    return;
  } else {
    for (const input of listInput) {
      input.classList.remove("bg-rose-500", "text-white");
    }
  }

  const numbers = listInput.map((input) => parseFloat(input.value) || 0);

  const average = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;

  display.innerText = average.toFixed(2);
});

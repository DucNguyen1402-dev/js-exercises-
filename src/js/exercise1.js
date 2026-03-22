const btn = document.getElementById("ex1_btn");
const input = document.getElementById("ex1_input");
const display = document.getElementById("ex1_output");
const resetBtn = btn.closest(".card").querySelector(".reset");

console.log(resetBtn);
const RATE = 100000;

const reset = () => {
  display.innerText = "0 đ";
  input.value = "";
};

resetBtn.addEventListener("click", reset);

// calculate
btn.addEventListener("click", () => {
  const days = input.valueAsNumber;

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
  display.innerText = `${salary.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })}`;
});

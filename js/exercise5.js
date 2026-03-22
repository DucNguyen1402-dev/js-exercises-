const btn = document.getElementById("ex5_btn");
const tens = document.getElementById("tens");
const units = document.getElementById("units");
const result = document.getElementById("result");
const resetBtn =  btn.closest(".card").querySelector(".reset");
const input = document.getElementById("num_input");

const reset = () => {
  tens.textContent = "0";
  units.textContent = "0";
  result.textContent = "0";
  input.value = "";
};

resetBtn.addEventListener("click", reset);

btn.addEventListener("click", () => {
  const number = parseInt(input.value);

  if (isNaN(number) || number < 10 || number > 99) {
    alert("Please enter a valid 2-digit number (10-99)!");
    reset();
    return;
  }

  const tensNumber = Math.floor(number / 10);
  const unitsNumber = number % 10;

  tens.textContent = `${tensNumber}`;
  units.textContent = `${unitsNumber}`;
  result.textContent = `${tensNumber + unitsNumber}`;
});

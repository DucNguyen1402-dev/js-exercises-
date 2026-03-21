const btn4 = document.getElementById("ex4_btn");
const lengthInput = document.getElementById("length_input");
const widthInput = document.getElementById("width_input");
const resetBtn = document.getElementById("resetBtn4");
const areaResult = document.getElementById("area_result");
const perimeterResult = document.getElementById("perimeter_result");


const reset = () => {
  lengthInput.value = "";
  widthInput.value = "";
  areaResult.textContent = "0";
  perimeterResult.textContent = "0";
};

const isInvalid = (...nums) =>
  nums.some(n => isNaN(n) || n <= 0);

resetBtn.addEventListener("click", reset);

btn4.addEventListener("click", () => {
  const { valueAsNumber: length } = lengthInput;
  const { valueAsNumber: width } = widthInput;

  if (isInvalid(length, width)) {
    alert("Please enter valid positive numbers!");
    reset();
    return;
  }

  areaResult.textContent = length * width;
  perimeterResult.textContent = 2 * (length + width);
});
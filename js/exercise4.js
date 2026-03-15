const btn4 = document.getElementById("ex4_btn");
btn4.addEventListener("click", () => {
  const length = parseFloat(document.getElementById("length_input").value);
  const width = parseFloat(document.getElementById("width_input").value);

  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    alert("Please enter valid positive numbers!");
    return;
  }

  const area = length * width;
  const perimeter = (length + width) * 2;

  const container = document.getElementById("ex4_output");
  document.getElementById("area_result").innerText = `Area: ${area}`;
  document.getElementById("perimeter_result").innerText =
    `Perimeter: ${perimeter}`;
  container.classList.remove("hidden");
});

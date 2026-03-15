const btn5 = document.getElementById("ex5_btn");
btn5.addEventListener("click", () => {
  const number = parseInt(document.getElementById("num_input").value);

  if (isNaN(number) || number < 10 || number > 99) {
    alert("Please enter a valid 2-digit number (10-99)!");
    return;
  }

  const tens = Math.floor(number / 10);
  const units = number % 10;
  const sum = tens + units;

  const display = document.getElementById("ex5_output");
  display.innerText = `Sum of ${tens} + ${units} = ${sum}`;
  display.classList.remove("hidden");
});

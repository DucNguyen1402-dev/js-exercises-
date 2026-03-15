const btn3 = document.getElementById("ex3_btn");
btn3.addEventListener("click", () => {
  const usd = parseFloat(document.getElementById("usd_input").value);
  const exchangeRate = 23500;

  if (isNaN(usd) || usd < 0) {
    alert("Please enter a valid positive number!");
    return;
  }

  const vnd = usd * exchangeRate;

  const display = document.getElementById("ex3_output");
  display.innerText = `Result: ${vnd.toLocaleString()} VND`;
  display.classList.remove("hidden");
});

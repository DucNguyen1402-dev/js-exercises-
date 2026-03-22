const btn = document.getElementById("ex3_btn");
const resetBtn =  btn.closest(".card").querySelector(".reset");
const display = document.getElementById("ex3_output");
const input = document.getElementById("usd_input");
// reset
const reset = () =>{
  display.innerText = "0 đ";
  input.value = "";
}

resetBtn.addEventListener("click", reset);

btn.addEventListener("click", () => {
  const usd = input.valueAsNumber;
  const exchangeRate = 26300;

  if (isNaN(usd) || usd < 0) {
    alert("Please enter a valid positive number!");
    reset();
    return;
  }

  const vnd = usd * exchangeRate;

  display.innerText = `${vnd.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })}`;
});

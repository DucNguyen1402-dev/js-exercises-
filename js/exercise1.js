const btn1 = document.getElementById("ex1_btn");
btn1.addEventListener("click", () => {
  const days = Number(document.getElementById("ex1_input").value);
  const rate = 100000;

  const salary = days * rate;

  const display = document.getElementById("ex1_output");
  display.innerText = `Total Salary: ${salary.toLocaleString()} VND`;
  display.classList.remove("hidden");
});

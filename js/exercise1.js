document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.getElementById("ex1_btn");
  btn1.addEventListener("click", () => {
    // 1. INPUT
    const days = Number(document.getElementById("ex1_input").value);
    const rate = 100000;

    // 2. PROCESS
    const salary = days * rate;

    // 3. OUTPUT
    const display = document.getElementById("ex1_output");
    display.innerText = `Total Salary: ${salary.toLocaleString()} VND`;
    display.classList.remove("hidden");
  });
});

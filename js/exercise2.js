const btn2 = document.getElementById("ex2_btn");
btn2.addEventListener("click", () => {
  const n1 = parseFloat(document.getElementById("num1").value) || 0;
  const n2 = parseFloat(document.getElementById("num2").value) || 0;
  const n3 = parseFloat(document.getElementById("num3").value) || 0;
  const n4 = parseFloat(document.getElementById("num4").value) || 0;
  const n5 = parseFloat(document.getElementById("num5").value) || 0;

  const average = (n1 + n2 + n3 + n4 + n5) / 5;

  const display = document.getElementById("ex2_output");
  display.innerText = `Average Result: ${average.toFixed(2)}`;
  display.classList.remove("hidden");
});

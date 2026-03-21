const cards = [...document.querySelectorAll(".card")];
const backdrop = document.getElementById("backdrop");

let placeholder;

let activeCard = null;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (activeCard) return;

    activeCard = card;

    backdrop.classList.remove("hidden");

    // create placeholder
    const rect = card.getBoundingClientRect();
    placeholder = document.createElement("div");
    placeholder.style.width = rect.width + "px";
    placeholder.style.height = rect.height + "px";

    card.parentNode.insertBefore(placeholder, card);

    setTimeout(() => {
      card.classList.add("active-card");
      card.classList.remove("opacity-50");
      document.body.classList.add("overflow-hidden"); 
    }, 10);
  });
});


function closeCard() {
  if (!activeCard) return;

  activeCard.classList.remove("active-card");
  activeCard.classList.add("opacity-50");
  document.body.classList.remove("overflow-hidden"); // khi mở
  // remove placeholder
  if (placeholder) {
    placeholder.remove();
    placeholder = null;
  }

  setTimeout(() => {
    backdrop.classList.add("hidden");
    activeCard = null;
  }, 500);
}


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCard();
});
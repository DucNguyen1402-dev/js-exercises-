const cards = [...document.querySelectorAll(".card")];
const backdrop = document.getElementById("backdrop");
const cardGuideOpen = document.querySelector(".card-guide.is-open");
const cardGuideClose = document.querySelector(".card-guide.is-collapsed");
const roundShape = document.querySelector(".round-shape");



roundShape.addEventListener("click", function () {
  const isActive = this.classList.toggle("translate-y-150");

  this.classList.toggle("-translate-x-350", isActive);

  this.classList.toggle("duration-1000", isActive);
  this.classList.toggle("duration-2000", !isActive);
});


function toggleCardGuide(card) {
  card.classList.toggle("translate-x-[91%]");
}

cardGuideOpen.addEventListener("click", function () {
  toggleCardGuide(this);
});
cardGuideClose.addEventListener("click", function () {
  toggleCardGuide(this);
});

function showCard(el) {
  el.classList.remove("translate-x-full");
  el.classList.add("translate-x-5");
}

window.addEventListener("load", () => {
  showCard(cardGuideOpen);

  setTimeout(() => {
    roundShape.classList.add("-translate-x-130");
  }, 200);

  setTimeout(() => {
    showCard(cardGuideClose);
  }, 3000);
});

let placeholder;
let activeCard = null;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (activeCard) return;

    activeCard = card;

    backdrop.classList.remove("hidden");
    roundShape.classList.remove("animate-bounce");

    // create placeholder
    const rect = card.getBoundingClientRect();
    placeholder = document.createElement("div");
    placeholder.style.width = rect.width + "px";
    placeholder.style.height = rect.height + "px";

    card.parentNode.insertBefore(placeholder, card);

    card.classList.remove("closed-card");
    setTimeout(() => {
      card.classList.add("active-card");
      card.querySelector(".backdrop").classList.add("-translate-y-full");
      document.body.classList.add("overflow-hidden");
    }, 20);
  });
});

function closeCard() {
  if (!activeCard) return;

  activeCard.classList.add("closed-card");
  activeCard.querySelector(".backdrop").classList.remove("-translate-y-full");
  setTimeout(() => {
    activeCard.classList.remove("active-card");
    activeCard.querySelector(".reset").click();
    roundShape.classList.add("animate-bounce");
  }, 20);

  document.body.classList.remove("overflow-hidden");

  if (placeholder) {
    placeholder.remove();
    placeholder = null;
  }

  setTimeout(() => {
    backdrop.classList.add("hidden");
    activeCard = null;
  }, 500);
}

// ==========================
// GLOBAL KEYBOARD EVENTS
// ==========================

// Handle global keydown (e.g. press ESC to close card)
function handleGlobalKeydown(e) {
  if (e.key === "Escape") {
    closeCard();
  }
}

// ==========================
// INPUT NUMBER BEHAVIOR
// ==========================

// Disable scroll (mouse wheel) on input[type="number"]
function disableNumberScroll(input) {
  input.addEventListener("wheel", (e) => {
    e.preventDefault();
  });
}

// Prevent invalid characters in number input (e, E, +, -)
function preventInvalidNumberInput(input) {
  input.addEventListener("keydown", (e) => {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  });
}

// ==========================
// SETUP FUNCTIONS
// ==========================

// Initialize all number inputs with custom behavior
function setupNumberInputs() {
  const inputs = document.querySelectorAll('input[type="number"]');

  inputs.forEach((input) => {
    disableNumberScroll(input);
    preventInvalidNumberInput(input);
  });
}

// ==========================
// APP ENTRY POINT
// ==========================

// Initialize application
function init() {
  document.addEventListener("keydown", handleGlobalKeydown);
  setupNumberInputs();
}

// Run app
init();

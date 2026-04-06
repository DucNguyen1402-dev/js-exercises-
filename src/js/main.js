import { $, $$, ElementNotFoundError } from "./dom-system.js";

/** 
 * ==========================
 *    0. DOM SETUP
 * ==========================
 */
const DOM = (() => {
  try {
    return {
      cards: [...$$(".card")],
      backdrop: $("#backdrop"),
      cardGuideOpen: $(".card-guide.is-open"),
      cardGuideClose: $(".card-guide.is-collapsed"),
      roundShape: $(".round-shape"),
      dogAnimations: [...$$(".dog__animation")],
      cardContainer: $(".card-container"),
    };
  } catch (error) {
    if (error instanceof ElementNotFoundError) {
      console.error(error.message);
    } else {
      console.error("Something went wrong: ", error.message);
    }
  }
})();


/** 
 * ==============================
 *    1. CARD GUIDE TOGGLE 
 * ============================
 */

function toggleCardGuide(card) {
  card.classList.replace("duration-1000", "duration-1200");
  card.classList.replace("ease-out", "ease-linear");
  if (card.classList.contains("translate-x-5")) {
    card.classList.replace("translate-x-5", "translate-x-[91%]");
  } else {
    card.classList.replace("translate-x-[91%]", "translate-x-5");
  }
}

setTimeout(() => {
  DOM.dogAnimations.forEach((dogAnimation) => {
    dogAnimation.classList.add("animate-walk-across");
  });
}, 12000);

DOM.cardGuideOpen.addEventListener("click", function () {
  toggleCardGuide(this);
});
DOM.cardGuideClose.addEventListener("click", function () {
  toggleCardGuide(this);
});

function showCard(el) {
  el.classList.replace("translate-x-[110%]", "translate-x-5");
}

window.addEventListener("load", () => {
  setTimeout(() => {
    showCard(DOM.cardGuideOpen);
  }, 2000);

  setTimeout(() => {
    DOM.roundShape.classList.add("lg:-translate-x-250", "2xl:-translate-x-300");
  }, 2100);

  setTimeout(() => {
    showCard(DOM.cardGuideClose);
  }, 5000);
});


function handleFirstUserInteraction(cardGuide) {
  setTimeout(() => {
    toggleCardGuide(cardGuide);
  }, 1000);
}

let isFirstCardClick = true;
DOM.cardContainer.addEventListener("click", () => {
  if (!isFirstCardClick) return;
  isFirstCardClick = false;
  handleFirstUserInteraction(DOM.cardGuideOpen);
});



/** 
 * ================================
 *    2. EXERCISE CARD ANIMATION 
 * ===============================
 */


/* ======== 2.1 OPEN CARD ========= */
let placeholder;
let activeCard = null;
DOM.cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (activeCard) return;

    activeCard = card;

    DOM.backdrop.classList.remove("hidden");
    DOM.roundShape.classList.remove("animate-bounce");

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
      card.classList.remove("hover:-translate-y-4");
      DOM.dogAnimations.forEach(
        (dogAnimation) => (dogAnimation.style.animationPlayState = "paused"),
      );
    }, 20);
  });
});


/* ======== 2.2 CLOSE CARD ========= */

function closeCard() {
  if (!activeCard) return;

  activeCard.classList.add("closed-card");
  activeCard.querySelector(".backdrop").classList.remove("-translate-y-full");
  setTimeout(() => {
    activeCard.classList.remove("active-card");
    activeCard.classList.add("hover:-translate-y-4");
    activeCard.querySelector(".reset").click();
    DOM.roundShape.classList.add("animate-bounce");
    DOM.dogAnimations.forEach(
      (dogAnimation) => (dogAnimation.style.animationPlayState = "running"),
    );
  }, 20);

  if (placeholder) {
    placeholder.remove();
    placeholder = null;
  }

  setTimeout(() => {
    DOM.backdrop.classList.add("hidden");
    activeCard = null;
  }, 500);
}



/* ======== 2.3 GLOBAL KEYBOARD EVENTS  ========= */

// Handle global keydown (e.g. press ESC to close card)
let isFirstESCPress = true;
function handleGlobalKeydown(e) {
  if (e.key !== "Escape") return;

  closeCard();

  if (!isFirstESCPress) return;

  isFirstESCPress = false;
  handleFirstUserInteraction(DOM.cardGuideClose);
}



/** 
 * ================================
 *    3. INPUT NUMBER BEHAVIOR 
 * ===============================
 */



/* ======== 3.1 INPUT NUMBER BEHAVIOR ============ */


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


/* ======== 3.2 SETUP FUNCTIONS ============ */


// Initialize all number inputs with custom behavior
function setupNumberInputs() {
  const inputs = document.querySelectorAll('input[type="number"]');

  inputs.forEach((input) => {
    disableNumberScroll(input);
    preventInvalidNumberInput(input);
  });
}

/* ======== 3.2 APP ENTRY POINT ============ */

// Initialize application
function init() {
  document.addEventListener("keydown", handleGlobalKeydown);
  setupNumberInputs();
}

// Run app
init();

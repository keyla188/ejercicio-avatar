// Obtén todas las zonas de clic (hotspots) y las tarjetas
const hotspots = document.querySelectorAll(".hotspot");
const cards = document.querySelectorAll(".card");

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", function () {
    const target = this.getAttribute("data-target");

    cards.forEach((card) => card.classList.remove("active"));

    const targetCard = document.querySelector(`.card.${target}`);
    if (targetCard) {
      targetCard.classList.add("active");
    }
  });
});

function updateActiveCard(targetClass) {
  cards.forEach((card) => card.classList.remove("active"));

  const targetCard = document.querySelector(`.card.${targetClass}`);
  if (targetCard) {
    targetCard.classList.add("active");
  }
}

const leftButton = document.querySelector(".slider-buttons .left");
const rightButton = document.querySelector(".slider-buttons .right");

leftButton.addEventListener("click", function () {
  const activeCard = document.querySelector(".card.active");

  if (activeCard && activeCard.classList.contains("third")) {
    updateActiveCard("second");
  } else if (activeCard && activeCard.classList.contains("second")) {
    updateActiveCard("first");
  }
});

rightButton.addEventListener("click", function () {
  const activeCard = document.querySelector(".card.active");

  if (activeCard && activeCard.classList.contains("first")) {
    updateActiveCard("second");
  } else if (activeCard && activeCard.classList.contains("second")) {
    updateActiveCard("third");
  }
});

updateActiveCard("first");

const prevButton = document.querySelector(".pre");
const nextButton = document.querySelector(".nex");
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const slideWidth = 215 + 30;
let currentIndex = 0;

function getVisibleSlides() {
  const carouselWidth = document.querySelector(".carousel").offsetWidth;
  return Math.floor(carouselWidth / slideWidth);
}

function updateCarousel() {
  const visibleSlides = getVisibleSlides();
  const offset = -currentIndex * slideWidth;
  track.style.transform = `translateX(${offset}px)`;

  nextButton.disabled = currentIndex >= slides.length - visibleSlides;

  prevButton.disabled = currentIndex <= 0;
}

nextButton.addEventListener("click", () => {
  const visibleSlides = getVisibleSlides();
  if (currentIndex < slides.length - visibleSlides) {
    currentIndex++;
  }
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  }
  updateCarousel();
});

updateCarousel();

window.addEventListener("resize", updateCarousel);

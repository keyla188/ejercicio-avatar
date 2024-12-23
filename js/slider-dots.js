document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider-dots .slide-item");
  const dots = document.querySelectorAll(".dots-container .dot");

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      slides.forEach((slide) => slide.classList.remove("active"));
      dots.forEach((dot) => dot.classList.remove("active"));

      slides[index].classList.add("active");
      dots[index].classList.add("active");
    });
  });

  slides[0].classList.add("active");
  dots[0].classList.add("active");
});

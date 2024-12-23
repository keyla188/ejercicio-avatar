document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    const slidesContainer = slider.querySelector(".slides");
    const prevButton = slider.querySelector(".prev");
    const nextButton = slider.querySelector(".next");

    let currentIndex = 0;

    const updateSlider = () => {
      const width = slidesContainer.clientWidth;
      slidesContainer.style.transform = `translateX(-${
        currentIndex * width
      }px)`;
    };

    prevButton.addEventListener("click", () => {
      currentIndex =
        currentIndex === 0
          ? slidesContainer.children.length - 1
          : currentIndex - 1;
      updateSlider();
    });

    nextButton.addEventListener("click", () => {
      currentIndex =
        currentIndex === slidesContainer.children.length - 1
          ? 0
          : currentIndex + 1;
      updateSlider();
    });

    setInterval(() => {
      currentIndex =
        currentIndex === slidesContainer.children.length - 1
          ? 0
          : currentIndex + 1;
      updateSlider();
    }, 5000);

    window.addEventListener("resize", updateSlider);
  });
});

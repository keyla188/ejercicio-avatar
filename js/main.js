document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");
  const footerContainer = document.getElementById("footer-container");
  const modalContainer = document.getElementById("modal-container");

  fetch("components/header/header.html")
    .then((response) => response.text())
    .then((html) => {
      headerContainer.innerHTML = html;

      const header = document.querySelector("header");
      const changePoint = window.innerHeight / 2; 
      
      if (header) {
        window.addEventListener("scroll", () => {
          if (window.scrollY > changePoint) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
        });
      } else {
        console.error("El elemento 'header' no fue encontrado.");
      }

      const headerButton = document.getElementById("menu-icon");
      if (headerButton) {
        headerButton.addEventListener("click", () => {
          const modalOverlay = document.querySelector(".header-modal");
          if (modalOverlay) {
            modalOverlay.style.display = "flex";
          }
        });
      }

      const closeHeaderModal = document.querySelector(
        ".header-modal .header-close"
      );
      if (closeHeaderModal) {
        closeHeaderModal.addEventListener("click", () => {
          const modalOverlay = document.querySelector(".header-modal");
          if (modalOverlay) {
            modalOverlay.style.display = "none";
          }
        });
      }
    })
    .catch((error) => {
      console.error("Error al cargar el header:", error);
    });

  fetch("components/footer/footer.html")
    .then((response) => response.text())
    .then((html) => {
      footerContainer.innerHTML = html;

      const subscribeButton = document.getElementById("subscribe-button");
      if (subscribeButton) {
        subscribeButton.addEventListener("click", () => {
          const modalOverlay = document.querySelector(".modal-overlay");
          if (modalOverlay) {
            modalOverlay.style.display = "flex";
          }
        });
      }
    })
    .catch((error) => {
      console.error("Error al cargar el footer:", error);
    });

  fetch("components/newsletter/newsletter.html")
    .then((response) => response.text())
    .then((html) => {
      modalContainer.innerHTML = html;

      const modalOverlay = document.querySelector(".modal-overlay");
      if (modalOverlay) {
        modalOverlay.style.display = "flex";

        const closeModal = document.querySelector(".close");
        if (closeModal) {
          closeModal.addEventListener("click", () => {
            modalOverlay.style.display = "none";
          });
        }
      }
    })
    .catch((error) => {
      console.error("Error al cargar el modal:", error);
    });
});

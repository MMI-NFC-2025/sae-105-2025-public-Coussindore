const nav = document.querySelector("nav.menu");
const toggle = document.querySelector(".menu-btn");
toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    nav.ariaHidden = !isOpen ? "true" : "false";
    toggle.ariaExpanded = isClosed ? "true" : "false";
    document.body.classList.toggle("no-scroll", isClosed);
});

const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

function updateCarousel() {
  const width = images[0].clientWidth;
  track.style.transform = `translateX(${-index * width}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

// Ajuster si la fenêtre change de taille
window.addEventListener('resize', updateCarousel);

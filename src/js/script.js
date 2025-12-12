const nav = document.querySelector("nav.menu"); //Interaction visible dans la totalité des pages du site, car c'est le menu.
const toggle = document.querySelector(".menu-btn");
toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    nav.ariaHidden = !isOpen ? "true" : "false";
    toggle.ariaExpanded = isClosed ? "true" : "false";
    document.body.classList.toggle("noscroll", isClosed);
});

const track = document.querySelector('.carousel__track'); //Interaction visible dans http://127.0.0.1:5501/index.html pour faire fonctionner le carousel
const images = document.querySelectorAll('.carousel__image');
const prevBtn = document.querySelector('.carousel__btn.prev');
const nextBtn = document.querySelector('.carousel__btn.next');

let index = 0;

function updateCarousel() {
  const width = images[0].clientWidth;
  track.style.transform = `translateX(${-index * width}px)`;
}

nextBtn.addEventListener('click', () => { //Interaction visible dans http://127.0.0.1:5501/index.html, c'est la flèche gauche.
  index = (index + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => { //Interaction visible dans http://127.0.0.1:5501/index.html, c'est la flèche droite.
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);


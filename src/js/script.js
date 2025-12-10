const nav = document.querySelector("nav.menu");
const toggle = document.querySelector(".menu-btn");
toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    nav.ariaHidden = !isOpen ? "true" : "false";
    toggle.ariaExpanded = isClosed ? "true" : "false";
    document.body.classList.toggle("no-scroll", isClosed);
});
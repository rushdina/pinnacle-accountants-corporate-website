const navbar = document.querySelector(".custom-navbar");

function updateNavbar() {
  if (!navbar) return;
  navbar.classList.toggle("navbar-scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateNavbar, { passive: true });
window.addEventListener("load", updateNavbar);

const testimonialCarousel = document.querySelector("#testimonialCarousel");
if (testimonialCarousel && window.bootstrap) {
  new bootstrap.Carousel(testimonialCarousel, {
    interval: 6000,
    ride: "carousel",
    pause: "hover",
    wrap: true,
  });
}

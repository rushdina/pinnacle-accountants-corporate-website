// Function to handle navbar background change on scroll
window.onscroll = function() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled'); // Add scrolled class
    } else {
            navbar.classList.remove('navbar-scrolled');
    }
};

// Duration for each testimonial
var myCarousel = document.querySelector('#testimonialCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 6000, // 6 seconds duration for each testimonial
    wrap: true
});

// Function to handle navbar background change on scroll
window.onscroll = function() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled'); // Add scrolled class
    } else {
            navbar.classList.remove('navbar-scrolled');
    }
};

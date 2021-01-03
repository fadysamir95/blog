$(document).ready(function () {
    // Navbar Responsive
    let Nav = document.getElementById("nav-list");
    let navToggle = document.getElementById("nav-toggle");

    navToggle.addEventListener("click", function() {
    Nav.classList.toggle("active");
    });
});
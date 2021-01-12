window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleNav() {
    var navToggle = document.querySelector(".toggle");
    var nav = document.querySelector(".navigation");
    navToggle.classList.toggle("active");
    nav.classList.toggle("active");
}
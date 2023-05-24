// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const navLinksEl = document.getElementById("navLinks");
const navBurgerEl = document.getElementById("navBurger");

var isNavLinksOpen = false;

function toggleNavLinks() {
    if(navLinksEl.style.display == "none") {
        navLinksEl.style.display = "block";
        isNavLinksOpen = true;
    } else {
        navLinksEl.style.display = "none";
        isNavLinksOpen = false;
    }
}

function checkWindowWidth() {
    if(window.innerWidth > 768) {
        navBurgerEl.style.display = "none";
        navLinksEl.style.display = "block";
    } else {
        navBurgerEl.style.display = "block";
        navLinksEl.style.display = "none";
    }
}

checkWindowWidth();

window.onresize = checkWindowWidth;

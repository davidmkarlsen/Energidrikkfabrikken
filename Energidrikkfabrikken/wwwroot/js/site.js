// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const navLinksEl = document.getElementById("navLinks");
const navBurgerEl = document.getElementById("navBurger");

let isNavLinksOpen = false;

function toggleNavLinks() {
    if(navLinksEl.style.display == "none") {
        navLinksEl.style.display = "block";
        isNavLinksOpen = true;
    } else {
        navLinksEl.style.display = "none";
        isNavLinksOpen = false;
    }

    checkScrollPosition()
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

const navbarEl = document.getElementById("navbar");

function checkScrollPosition() {
    if(window.scrollY == 0 && !isNavLinksOpen) {
        navbarEl.style.backgroundColor = "transparent";
        navbarEl.style.boxShadow = "none"
    } else {
        navbarEl.style.backgroundColor = "#FFFFFF";
        navbarEl.style.boxShadow = "rgba(0, 0, 0, 0.08) 0px 4px 12px;"
    }
}

checkScrollPosition()

window.onscroll = checkScrollPosition;

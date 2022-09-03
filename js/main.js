const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* SHOW MENU */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* HIDDEN MENU  */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* REMOVE MOBILE MENU */
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
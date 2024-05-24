// Toggle responsive navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
const closeMenu = document.querySelector('.close-menu');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    nav.classList.remove('active');
});
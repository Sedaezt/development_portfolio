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

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

const texts = ["designs", "develops"];
let index = 0;

function changeText() {
    index = (index + 1) % texts.length;
    document.getElementById("changing-text").textContent = texts[index];
}

setInterval(changeText, 2000);




//Declare all Global Variable

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-nav');

const mobileMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

hamburger.addEventListener('click', mobileMenu);

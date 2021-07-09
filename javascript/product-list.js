const mainMenu = document.querySelector('.main-menu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');

openMenu.addEventListener('click', show);

closeMenu.addEventListener('click', hide);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.left = '0';
}
function hide() {
    mainMenu.style.display = 'none';
}

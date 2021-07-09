//Declare all Global Variable

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav");
const navList = document.querySelector(".nav-list");
const join = document.querySelector(".join");
const account = document.querySelector(".account");

const mobileMenu = () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	navList.classList.toggle("active");
};

hamburger.addEventListener("click", mobileMenu);

// window.open(checkStatus());

window.onload = () => {
	// let loggedIn = localStorage.getItem("loggedIn");
	let loggedIn = "";
	if (loggedIn === "") join.style.display = "block";
	if (loggedIn !== "") account.style.display = "block";
};

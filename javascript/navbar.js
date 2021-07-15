//Declare all Global Variable

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav");
const navList = document.querySelector(".nav-list");
const join = document.querySelector(".join");
const account = document.querySelector(".account");
const signOutBtn = document.querySelector(".sign-out");

const mobileMenu = () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	navList.classList.toggle("active");
};

const signOut = () => {
	localStorage.clear();
	window.location = "/";
};

hamburger.addEventListener("click", mobileMenu);

signOutBtn.addEventListener("click", signOut);

window.addEventListener("load", () => {
	!localStorage.getItem("userToken") ? (join.style.display = "block") : (account.style.display = "block");
});

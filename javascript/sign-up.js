// decarling gobal varible

const togglePassword = document.querySelector("#togglePassword");
const toggleConfirmPassword = document.querySelector("#toggle-confirm-password");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const myForm = document.querySelector("#myform");

//  toggling the password visilibilty

togglePassword.addEventListener("click", function (e) {
	// toggle the type attribute
	const type = password.getAttribute("type") === "password" ? "text" : "password";
	password.setAttribute("type", type);
	// toggle the eye / eye slash icon
	this.classList.toggle("bi-eye");
});

toggleConfirmPassword.addEventListener("click", function (e) {
	// toggle the type attribute
	const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
	confirmPassword.setAttribute("type", type);
	// toggle the eye / eye slash icon
	this.classList.toggle("bi-eye");
});

// sending form data with fetch api
myForm.addEventListener("submit", function (e) {
	e.preventDefault();

	const firstName = document.querySelector("#firstName").value;
	const lastName = document.querySelector("#lastName").value;
	const email = document.querySelector("#email").value;
	const password = document.querySelector("#password").value;
	const confirmPassword = document.querySelector("#confirmPassword").value;

	const user = {
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: password,
		confirmPassword: confirmPassword,
	};

	console.log(user);
	// const formData = new FormData(this);

	fetch("https://maniera-dev.herokuapp.com/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((response) => response.json())
		.then((user) => {
			console.log("success:", user);
			console.log(user);
		})
		.catch((error) => {
			console.log("error:", error);
			console.log(user);
		});
});

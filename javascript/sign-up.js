// decarling gobal varible

const togglePassword = document.querySelector("#togglePassword");
const toggleConfirmPassword = document.querySelector("#toggle-confirm-password");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const myForm = document.querySelector("#myform");

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const passwordError = document.querySelector(".password-error");
const confirmPasswordError = document.querySelector(".confirm-password-error");

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

	const user = {
		firstName: firstName.value,
		lastName: lastName.value,
		email: email.value,
		password: password.value,
		confirmPassword: confirmPassword.value,
	};

	console.log(user);

	const CheckPassword = (inputtxt) => {
		var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
		if (inputtxt.value.match(decimal)) {
			return true;
		} else {
			return false;
		}
	};

	if (!CheckPassword(password)) {
		passwordError.classList.add("alert", "alert-danger");
		passwordError.innerHTML = "Password should contain at least a letter, a digit, a symbol and not less than 8 characters";

		setTimeout(() => {
			passwordError.classList.remove("alert", "alert-danger");
			passwordError.innerHTML = "";
		}, 10000);
	} else if (password.value !== confirmPassword.value) {
		confirmPasswordError.classList.add("alert", "alert-danger");
		confirmPasswordError.innerHTML = "Password does not match";

		setTimeout(() => {
			confirmPasswordError.classList.remove("alert", "alert-danger");
			confirmPasswordError.innerHTML = "";
		}, 10000);
	} else {
		fetch("https://maniera-dev.herokuapp.com/api/auth/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => {
				if (res.status === 200 || res.status === 201) {
					localStorage.setItem("user", JSON.stringify(res.json()));
					window.location = "/html/sign-in.html";
				} else if (res.status === 401 || res.status === 404) {
					console.log("error");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}
});

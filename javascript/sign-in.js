// Selecting general elements
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const preloader = document.querySelector(".preloader");

function showAlert(message, type) {
	const alertMessage = document.querySelector("#alert-message");
	alertMessage.innerHTML = `<div class="alert alert-${type} alert-block text-center" role="alert">
    ${message}
    </div>
    `;
	alertMessage.style.display = "block";

	setTimeout(function () {
		alertMessage.style.display = "none";
	}, 8000);
}

const loginForm = (e) => {
	e.preventDefault();
	preloader.style.display = "block";
	if (!password.value || !email.value) {
		preloader.style.display = "none";
		return showAlert("Field can not be empty", "danger");
	}

	const user = {
		email: email.value,
		password: password.value,
	};
	const cookie = document.cookie
		.split(";")
		.map((cookie) => cookie.split("="))
		.reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

	console.log(user);

	fetch("https://maniera-dev.herokuapp.com/api/auth/signin", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json, text/plain",
		},
		body: JSON.stringify(user),
	})
		.then((res) => {
			if (res.status === 200 || res.status === 201) {
				const cookie = document.cookie
					.split(";")
					.map((cookie) => cookie.split("="))
					.reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
				console.log(cookie);
				console.log(res);
				preloader.style.display = "none";

				let loggedIn = "";
				localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
				window.location = "/";
			} else if (res.status === 401 || res.status === 404 || res.status === 400) {
				preloader.style.display = "none";
				console.log(res.statusText);
			}
		})
		.catch((error) => {
			preloader.style.display = "none";
			console.error(error);
		});
};

form.addEventListener("submit", loginForm);

// google signin
function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log("Name: " + profile.getName());
	console.log("Image URL: " + profile.getImageUrl());
	console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
}

let id_token = googleUser.getAuthResponse().id_token;
post(`${BASE_URL}`, { id_token: id_token }).then(() => {
	window.location.replace("https://maniera-beta-tesing.netlify.app");
});

// facebook login
function facebookLogin() {
	FB.login((response) => {
		console.log(response);
	});
}

window.fbAsyncInit = function () {
	FB.init({
		appId: "143288521228126",
		autoLogAppEvents: true,
		xfbml: true,
		version: "v11.0",
	});
};

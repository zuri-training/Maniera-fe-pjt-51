const steps = Array.from(document.querySelectorAll("form .form-tab"));
// const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .back-btn");
const form = document.querySelector("form");

//selecting elements of tab-1
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");
const error = document.querySelector(".error-message");

//selecting elements of tab-2
const businessName = document.querySelector("#businessName");
const country = document.querySelector("#country");
const address = document.querySelector("#address");
const businessPhoneNumber = document.querySelector("#businessPhoneNumber");
const error2 = document.querySelector(".error-message2");
let businessScale;

//selecting tab-3
const other = document.querySelector("#other");
const clothType = [];

// nextBtn.forEach((button) => {
// 	button.addEventListener("click", () => {
// 		changeStep("next");
// 	});
// });
prevBtn.forEach((button) => {
	button.addEventListener("click", () => {
		changeStep("back");
	});
});

const changeStep = (btn) => {
	let index = 0;
	const current = document.querySelector(".current");
	index = steps.indexOf(current);
	steps[index].classList.remove("current");

	if (btn === "next") {
		index++;
	} else if (btn === "back") {
		index--;
	}
	steps[index].classList.add("current");
};

const validateTab1 = () => {
	if (firstName.value == "" || lastName.value == "" || email.value == "" || !validateEmail(email.value) || !validatePhoneNumber(phoneNumber.value)) {
		console.log("error");
		error.innerHTML = "Please Fill In All The Boxes";
		console.log(phoneNumber.value);
	} else {
		error.innerHTML = "";
		changeStep("next");
	}
};

const validateTab2 = () => {
	for (let i = 0; i < form.businessScale.length; i++) {
		if (form.businessScale[i].checked) {
			businessScale = form.businessScale[i].value;
		}
	}
	console.log(businessScale);

	if (businessName.value == "" || country.value == "" || address.value == "" || !validateBusinessNumber(businessPhoneNumber.value)) {
		console.log("error");
		error2.innerHTML = "Please Fill In All The Boxes";
	} else {
		error2.innerHTML = "";
		changeStep("next");
		console.log("yes!!!");
	}
};

const validateTab3 = () => {
	for (let i = 0; i < form.clothType.length; i++) {
		if (form.clothType[i].checked) {
			clothType.push(form.clothType[i].value);
		}
	}
	form.otherType.checked ? clothType.push(other.value) : "";
	// console.log(clothType);
	// changeStep("next");
};

const validateEmail = (inputText) => {
	let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (inputText.match(mailformat)) {
		document.querySelector(".email-error").innerHTML = "";
		document.querySelector(".email-error").classList.remove("alert", "alert-danger");
		return true;
	} else {
		document.querySelector(".email-error").innerHTML = "Not A Valid Email";
		document.querySelector(".email-error").classList.add("alert", "alert-danger");
	}
};

const validatePhoneNumber = (num) => {
	let phoneno = /^\d{10}$/;
	if (num.match(phoneno)) {
		document.querySelector(".number-error").innerHTML = "";
		document.querySelector(".number-error").classList.remove("alert", "alert-danger");
		return true;
	} else {
		document.querySelector(".number-error").innerHTML = "Not A Valid Number";
		document.querySelector(".number-error").classList.add("alert", "alert-danger");
		return false;
	}
};
const validateBusinessNumber = (num) => {
	let phoneno = /^\d{10}$/;
	if (num.match(phoneno)) {
		document.querySelector(".business-number-error").innerHTML = "";
		document.querySelector(".business-number-error").classList.remove("alert", "alert-danger");
		return true;
	} else {
		document.querySelector(".business-number-error").innerHTML = "Not A Valid Number";
		document.querySelector(".business-number-error").classList.add("alert", "alert-danger");
		return false;
	}
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("yam");

	const seller = {
		firstName: firstName.value,
		lastName: lastName.value,
		email: email.value,
		phoneNumber: phoneNumber.value,
		businessName: businessName.value,
		address: address.value,
		businessScale: businessScale,
		clothType: clothType,
	};

	fetch("https://maniera-dev.herokuapp.com/api/auth/seller/userId", {
		method: "post",
		body: JSON.stringify(seller),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			if (res.status === 200 || res.status === 201) {
				localStorage.setItem("seller", JSON.stringify(res.json()));
				window.location = "/admin/html/dashboard.html";
			} else if (res.status === 401 || res.status === 404) {
				console.log("error");
			}
		})
		.catch(function (error) {
			console.error(error);
		});

	console.log(seller);
	// form.reset();
});

const steps = Array.from(document.querySelectorAll("form .form-tab"));
// const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .back-btn");
const form = document.querySelector("form");

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

const validateTab1 = () => {
	const firstName = document.querySelector("#firstName").value;
	const lastName = document.querySelector("#lastName").value;
	const email = document.querySelector("#email").value;
	const error = document.querySelector(".error-message");

	if (firstName == "" || lastName == "" || email == "") {
		console.log("error");
		error.innerHTML = "Please fill in the right information";
	} else {
		error.innerHTML = "";
		changeStep("next");
		console.log("yes!!");
	}
};

const validateTab2 = () => {
	const businessName = document.querySelector("#businessName").value;
	const country = document.querySelector("#country").value;
	const address = document.querySelector("#address").value;
	const error2 = document.querySelector(".error-message2");
	if (businessName == "" || country == "" || address == "") {
		console.log("error");
		error2.innerHTML = "Please fill in the right information";
	} else {
		error2.innerHTML = "";
		changeStep("next");
		console.log("yes!!!");
	}
};

const validateTab3 = () => {
	changeStep("next");
};

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

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const inputs = [];
	form.querySelectorAll("input").forEach((input) => {
		const { name, value } = input;
		inputs.push({ name, value });
	});
	console.log(inputs);
	form.reset();
});

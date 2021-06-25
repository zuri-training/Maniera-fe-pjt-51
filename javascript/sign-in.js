// decarling gobal varible

const togglePassword = document.querySelector("#toggle-Password");
const toggleConfirmPassword = document.querySelector(
  "#toggle-confirm-password"
);
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const myForm = document.querySelector("#myform");

//  toggling the password visilibilty

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye / eye slash icon
  this.classList.toggle("bi-eye");
});

toggleConfirmPassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    confirmPassword.getAttribute("type") === "password" ? "text" : "password";
  confirmPassword.setAttribute("type", type);
  // toggle the eye / eye slash icon
  this.classList.toggle("bi-eye");
});

// sending form data with fetch api
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  fetch("https://maniera-dev.herokuapp.com/api/auth/signup", {
    method: "post",
    body: formData,
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      console.log(text);
    });
});

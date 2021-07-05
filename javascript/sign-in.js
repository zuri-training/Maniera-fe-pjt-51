const form = document.getElementById('form');


const BASE_URL = 'https://maniera-dev.herokuapp.com/api';

//----signin loader---
const loading = document.getElementById('loading');
loading.style.display = 'none';





function showAlert(message, type) {
    const alertMessage = document.querySelector("#alert-message");
    alertMessage.innerHTML = `<div class="alert alert-${type} alert-block text-center" role="alert">
    ${message}
    </div>
    `
    alertMessage.style.display = "block";

    setTimeout(function () {
        alertMessage.style.display = "none";
    }, 8000)
}

const loginForm = async () => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!password || !email)
        return showAlert("Field can not be empty", "danger");
    try {
        
        const response = await fetch(`${BASE_URL}`/auth/signin, {
            method:"POST", 
            headers:{
                "Accept": "application/json, text/plain",
                "Content-type": "application/json"

            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = await response.json();
        console.log(data);
        window.location.replace('https://maniera-beta-tesing.netlify.app');
        form.reset();
    } catch (error) {
        showAlert("Sorry! Error signing in.", "danger")
        console.log(error);
    }
}

form.addEventListener("submit", loginForm);


// google signin
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

let id_token = googleUser.getAuthResponse().id_token;
post(`${BASE_URL}`, {id_token: id_token})
.then(() => {
    window.location.replace('https://maniera-beta-tesing.netlify.app');
})

// facebook login
function facebookLogin() {
    FB.login((response) => {
        console.log(response)
    })
}

window.fbAsyncInit = function() {
    FB.init({
      appId            : '143288521228126',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v11.0'
    });
};

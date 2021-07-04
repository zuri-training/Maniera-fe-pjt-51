const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

const BASE_URL = 'https://maniera-dev.herokuapp.com/api/';

//----signin loader---
const loading = document.getElementById('loading');
loading.style.display = 'none';

// Desktop
const DesktopForm = document.getElementById('desktop-form');
const DesktopEmail = document.getElementById('desktop-email');
const DesktopPassword = document.getElementById('desktop-password');
//----signin loader---
const loader = document.getElementById('loader');
loader.style.display = 'none';




form.addEventListener('submit', async e => {
    e.preventDefault();

    loading.style.display = 'block';

    let response = await axios.post(`${BASE_URL}auth/signin`, {
        email: email.value,
        password: password.value
    })
    localStorage.setItem('token', response.data.token);
    loading.style.display = 'none';
    // window.location.href('/index.html');
    // debugger;
})



Desktopform.addEventListener('submit', async e => {
    e.preventDefault();

    loader.style.display = 'block';

    let response = await axios.post(`${BASE_URL}auth/signin`, {
        email: DesktopEmail.value,
        password: DesktopPassword.value
    })
    localStorage.setItem('token', response.data.token);
    loader.style.display = 'none';
    // window.location.href('/index.html');
})

// google signin
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
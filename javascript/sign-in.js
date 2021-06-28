const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');



const BASE_URL = 'https://maniera-dev.herokuapp.com/api/'


form.addEventListener('submit', async e => {
    e.preventDefault();

    let response = await axios.post(`${BASE_URL}auth/signin`, {
        email: email.value,
        password: password.value
    })
    localStorage.setItem('token', response.data.token);
})
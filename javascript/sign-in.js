const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');



const BASE_URL = 'https://maniera-dev.herokuapp.com/api/';

//----signin loader---
const loading = document.getElementById('loading');
loading.style.display = 'none';


form.addEventListener('submit', async e => {
    e.preventDefault();

    loading.style.display = 'block';

    let response = await axios.post(`${BASE_URL}auth/signin`, {
        email: email.value,
        password: password.value
    })
    localStorage.setItem('token', response.data.token);
    loading.style.display = 'none';
})
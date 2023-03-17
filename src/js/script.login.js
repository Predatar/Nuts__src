document.addEventListener('DOMContentLoaded', () => {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const loginForm = document.querySelector('.login__form');

    loginForm.addEventListener('submit', e => {
        e.preventDefault();

        const person = JSON.parse(localStorage.getItem(email.value));

        if (person) {
            console.log(person);
            if (password.value == person.password) {
                localStorage.setItem('isLogin', true);
                localStorage.setItem('nameLogined', person.email);
                document.location.href = '/index.html';
            } else {
                alert('Неыерный пароль');
            }
        } else {
            alert('Такой аккаунт не зарегестрирован');
        }
    });
});

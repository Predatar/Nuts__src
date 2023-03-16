document.addEventListener('DOMContentLoaded', () => {
    const email = document.querySelector('#email');

    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');

    const mainForm = document.querySelector('.main__form');
    const submainForm = document.querySelector('.submain__form');

    mainForm.addEventListener('submit', e => {
        e.preventDefault();
    })
})
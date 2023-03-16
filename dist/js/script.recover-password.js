document.addEventListener('DOMContentLoaded', () => {
    const email = document.querySelector('#email');

    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');

    const mainForm = document.querySelector('.main__form');
    const submainForm = document.querySelector('.submain__form');

    let person, isConfirm;

    mainForm.addEventListener('submit', e => {
        e.preventDefault();

        person = JSON.parse(localStorage.getItem(email.value));

        if (person) {
            isConfirm = confirm('Вы хотите востановить пароль?');
        } else {
            alert('Такой аккаунт не зарегестрирован');
        }
    });
    submainForm.addEventListener('submit', e => {
        e.preventDefault();

        if (isConfirm) {
            if (password.value == confirmPassword.value) {
                person.password = password.value;
                localStorage.setItem(person.email, JSON.stringify(person));
            } else {
                alert('Не совпадают пароли');
            }
        } else {
            alert('Подтвердите или отправьте запрос на подтверждение изменение пароля!');
        }
    });
});

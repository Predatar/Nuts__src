document.addEventListener('DOMContentLoaded', () => {
    const currentPassword = document.querySelector('#currentPassword');
    const newPassword = document.querySelector('#currentPassword');
    const confirmPassword = document.querySelector('#currentPassword');
    const passwordForm = document.querySelector('.password__form');

    const emailPerson = localStorage.getItem('nameLogined');
    const person = localStorage.getItem(emailPerson);

    passwordForm.addEventListener('submit', e => {
        e.preventDefault();
        if (confirm('Вы хотите текущий пароль?')) {
            if (currentPassword.value == person.password) {
                if (newPassword.value == confirmPassword.value) {
                    person.password = newPassword.value;
                    localStorage.setItem(person.email, person);
                } else {
                    console.log('Новый пароль не совпадает');
                }
            } else {
                console.log('Исходные пароли не совпадают');
            }
        } else {
            console.log('Вы отказались изменять пароль');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const registerFrom = document.querySelector('.registration__form');

    const fullName = document.querySelector('#fullname');
    const email = document.querySelector('#email');
    const tel = document.querySelector('#tel');
    const country = document.querySelector('#country');

    registerFrom.addEventListener('submit', e => {
        e.preventDefault();
        console.log('form');
    });
});

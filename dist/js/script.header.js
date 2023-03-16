document.addEventListener('DOMContentLoaded', () => {
    const headerSidemenuBtnOpen = document.querySelector('.hamburger');
    const headerSidemenuBtnClose = document.querySelector('.sidemenu__exit');
    const sidemenu = document.querySelector('.sidemenu');

    headerSidemenuBtnOpen.addEventListener('click', () => {
        sidemenu.classList.add('sidemenu_show');
    });
    headerSidemenuBtnClose.addEventListener('click', () => {
        sidemenu.classList.remove('sidemenu_show');
    });

    const isLogin = localStorage.getItem('isLogin');
    const userAccount = document.querySelector('.user-unit__account');
    const userLogin = document.querySelector('.user-unit__login');
    const userRegistration = document.querySelector('.user-unit__registration');
    const sideMenuAccount = document.querySelector('.sidemenu__cabinet');
    const sideMenuLogin = document.querySelector('.sidemenu__login');
    const sideMenuRegistration = document.querySelector('.sidemenu__registration');

    if (isLogin == 'true') {
        userLogin.classList.add('user-unit__login_hide');
        userRegistration.classList.add('user-unit__registration_hide');
        userAccount.classList.add('user-unit__account_show');

        sideMenuAccount.classList.add('sidemenu__cabinet_show');
        sideMenuLogin.classList.add('sidemenu__login_hide');
        sideMenuRegistration.classList.add('sidemenu__registration_hide');
    } else {
        userAccount.classList.remove('user-unit__account_show');
        userLogin.classList.remove('user-unit__login_hide');
        userRegistration.classList.remove('user-unit__registration_hide');

        sideMenuAccount.classList.remove('sidemenu__cabinet_show');
        sideMenuLogin.classList.remove('sidemenu__login_hide');
        sideMenuRegistration.classList.remove('sidemenu__registration_hide');
    }
});

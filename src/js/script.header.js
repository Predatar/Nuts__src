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
});

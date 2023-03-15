document.addEventListener('DOMContentLoaded', () => {
    const regNav = document.querySelector('.registration__nav');
    const regNavItem = document.querySelectorAll('.registration__nav-item');
    const fopCheck = document.querySelector('#fop');
    const fopProps = document.querySelector('.registration__fop');
    const fopAddress = document.querySelector('.registration__fop-address');

    regNav.addEventListener('click', ({ target }) => {
        regNavItem.forEach(elem => {
            elem.classList.contains('registration__nav-item_active')
                ? elem.classList.remove('registration__nav-item_active')
                : null;
        });
        target.classList.add('registration__nav-item_active');
    });

    fopCheck.addEventListener('change', () => {
        if (fopCheck.checked) {
            fopProps.classList.add('registration__fop_show');
            fopAddress.classList.add('registration__fop-address_show')
        } else {
            fopProps.classList.remove('registration__fop_show');
            fopAddress.classList.remove('registration__fop-address_show')
        }
    });
});

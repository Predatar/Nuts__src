document.addEventListener('DOMContentLoaded', () => {
    const regNav = document.querySelector('.registration__nav');
    const regNavItem = document.querySelectorAll('.registration__nav-item');
    const fopCheck = document.querySelector('#fop');
    const fopProps = document.querySelector('.registration__fop');
    const fopAddress = document.querySelector('.registration__fop-address');
    const fopContainer = document.querySelector('.registration__fop-container');
    const corporateContainer = document.querySelector('.registration__corporate-container');

    const fopInputs = [
        document.querySelector('.registration__props'),
        ...document.querySelectorAll('.select__fop-input'),
        document.querySelector('#addressFop')
    ];
    const corpInputs = document.querySelectorAll('.registration__corporate-container input');
    corpInputs.forEach(elem => {
        elem.setAttribute('disabled', 'disabled');
    });

    regNav.addEventListener('click', ({ target }) => {
        regNavItem.forEach(elem => {
            elem.classList.contains('registration__nav-item_active')
                ? elem.classList.remove('registration__nav-item_active')
                : null;
        });
        target.classList.add('registration__nav-item_active');
        switch (target.getAttribute('data-person')) {
            case 'fop':
                if (fopCheck.checked) {
                    fopInputs.forEach(elem => {
                        elem.removeAttribute('disabled');
                    });
                }
                corpInputs.forEach(elem => {
                    elem.setAttribute('disabled', 'disabled');
                });
                fopContainer.classList.remove('registration__fop-container_hide');
                corporateContainer.classList.remove('registration__corporate-container_show');
                break;
            case 'corp':
                fopInputs.forEach(elem => {
                    elem.setAttribute('disabled', 'disabled');
                });
                corpInputs.forEach(elem => {
                    elem.removeAttribute('disabled');
                });
                fopContainer.classList.add('registration__fop-container_hide');
                corporateContainer.classList.add('registration__corporate-container_show');
                break;
            default:
                break;
        }
    });

    fopCheck.addEventListener('change', () => {
        if (fopCheck.checked) {
            fopProps.classList.add('registration__fop_show');
            fopAddress.classList.add('registration__fop-address_show');
        } else {
            fopProps.classList.remove('registration__fop_show');
            fopAddress.classList.remove('registration__fop-address_show');
        }
    });
});

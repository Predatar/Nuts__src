document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.content__container');
    const listItem = document.querySelectorAll('.content__item');
    const tabs = document.querySelectorAll('.content__tab');
    const content = document.querySelector('.content');
    const path = document.querySelector('.promo__path_add');
    const address = document.querySelector('[data-tag="Address"]');

    const addActiveClassToTab = i => {
        tabs.forEach(elem => {
            elem.classList.contains('content__tab_active')
                ? elem.classList.remove('content__tab_active')
                : null;
        });
        tabs[i].classList.add('content__tab_active');
    };

    const addActiveClassToItem = target => {
        listItem.forEach(elem => {
            elem.classList.contains('content__item_active')
                ? elem.classList.remove('content__item_active')
                : null;
        });
        target.classList.add('content__item_active');
    };

    localStorage.getItem('corp') == 'true' ? (address.innerHTML += ` реквизиты`) : null;

    list.addEventListener('click', ({ target }) => {
        if (target.tagName == 'SPAN') {
            switch (target.getAttribute('data-tag')) {
                case 'Order history':
                    addActiveClassToItem(target);
                    addActiveClassToTab(0);
                    path.innerHTML = `<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.00001 10L6.3 9.30002L10.1 5.5H0V4.50002H10.1L6.3 0.700003L7.00001 1.81198e-05L12 5.00001L7.00001 10Z"
                        fill="#8A8A8A" />
                    </svg>
                    История заказов`;
                    break;

                case 'Transaction history':
                    addActiveClassToItem(target);
                    addActiveClassToTab(1);
                    path.innerHTML = `<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.00001 10L6.3 9.30002L10.1 5.5H0V4.50002H10.1L6.3 0.700003L7.00001 1.81198e-05L12 5.00001L7.00001 10Z"
                        fill="#8A8A8A" />
                    </svg>
                    История транзакций`;
                    break;

                case 'Contact details':
                    addActiveClassToItem(target);
                    addActiveClassToTab(2);
                    path.innerHTML = `<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.00001 10L6.3 9.30002L10.1 5.5H0V4.50002H10.1L6.3 0.700003L7.00001 1.81198e-05L12 5.00001L7.00001 10Z"
                        fill="#8A8A8A" />
                    </svg>
                    Контактная информация`;
                    break;

                case 'Password':
                    addActiveClassToItem(target);
                    addActiveClassToTab(3);
                    path.innerHTML = `<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.00001 10L6.3 9.30002L10.1 5.5H0V4.50002H10.1L6.3 0.700003L7.00001 1.81198e-05L12 5.00001L7.00001 10Z"
                        fill="#8A8A8A" />
                    </svg>
                    Пароль`
                    break;

                case 'Address':
                    addActiveClassToItem(target);
                    addActiveClassToTab(4);

                    /* localStorage.getItem('corp') == 'true'
                        ? (content.style.paddingBottom = '722px')
                        : (content.style.paddingBottom = '180px'); */

                    path.innerHTML = `<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.00001 10L6.3 9.30002L10.1 5.5H0V4.50002H10.1L6.3 0.700003L7.00001 1.81198e-05L12 5.00001L7.00001 10Z"
                        fill="#8A8A8A" />
                    </svg>
                    ${address.innerHTML}`;
                    break;

                default:
                    break;
            }
        }
    });
});

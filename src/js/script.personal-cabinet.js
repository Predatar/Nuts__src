document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.content__container');
    const listItem = document.querySelectorAll('.content__item');
    const tabs = document.querySelectorAll('.content__tab');

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

    list.addEventListener('click', ({ target }) => {
        if (target.tagName == 'SPAN') {
            switch (target.getAttribute('data-tag')) {
                case 'Order history':
                    addActiveClassToItem(target);
                    addActiveClassToTab(0);
                    break;

                case 'Transaction history':
                    addActiveClassToItem(target);
                    addActiveClassToTab(1);
                    break;

                case 'Contact details':
                    addActiveClassToItem(target);
                    addActiveClassToTab(2);
                    break;

                case 'Password':
                    addActiveClassToItem(target);
                    addActiveClassToTab(3);
                    break;

                case 'Address':
                    addActiveClassToItem(target);
                    addActiveClassToTab(4);
                    break;

                default:
                    break;
            }
        }
    });
});

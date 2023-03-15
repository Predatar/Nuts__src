document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.card__slider', {
        navigation: {
            nextEl: '.card__btn-next',
            prevEl: '.card__btn-prev'
        }
    });

    const infoSelect = document.querySelectorAll('.info__list-item');
    const infoTabs = document.querySelectorAll('.info__tab');

    const toggleActiveClassInformationSelect = (selector, element, toggleClass) => {
        selector.forEach(elem => {
            elem.classList.contains(toggleClass) ? elem.classList.remove(toggleClass) : null;
        });
        element.classList.add(toggleClass);
    };

    const toggleActiveClassInformationTabs = (selector, index, toggleClass) => {
        selector.forEach(elem => {
            elem.classList.contains(toggleClass) ? elem.classList.remove(toggleClass) : null;
        });
        selector[index].classList.add(toggleClass);
    };

    infoSelect.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            toggleActiveClassInformationSelect(infoSelect, elem, 'info__list-item_active');
            toggleActiveClassInformationTabs(infoTabs, index, 'info__tab_active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const informationSelect = document.querySelectorAll('.information__list-item');
    const informationTabs = document.querySelectorAll('.information__tab');

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

    informationSelect.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            toggleActiveClassInformationSelect(
                informationSelect,
                elem,
                'information__list-item_active'
            );
            toggleActiveClassInformationTabs(informationTabs, index, 'information__tab_active');
        });
    });
});

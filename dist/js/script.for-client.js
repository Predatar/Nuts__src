document.addEventListener('DOMContentLoaded', () => {
    const catalogTabs = document.querySelectorAll('.catalog__tab');
    const catalogSelects = document.querySelectorAll('.catalog__list-item');

    const toggleActiveClassCatalogSelect = (selector, element, toggleClass) => {
        selector.forEach(elem => {
            elem.classList.contains(toggleClass) ? elem.classList.remove(toggleClass) : null;
        });
        element.classList.add(toggleClass);
    };

    const toggleActiveClassCatalogTabs = (selector, index, toggleClass) => {
        selector.forEach(elem => {
            elem.classList.contains(toggleClass) ? elem.classList.remove(toggleClass) : null;
        });
        selector[index].classList.add(toggleClass);
    };

    catalogSelects.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            toggleActiveClassCatalogSelect(
                catalogSelects, elem, 'catalog__list-item_active'
            )
            toggleActiveClassCatalogTabs(catalogTabs, index, 'catalog__tab_active')
        });
    });
});

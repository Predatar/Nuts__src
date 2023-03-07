document.addEventListener('DOMContentLoaded', () => {
    const catalogTabs = document.querySelector('.catalog__tabs-wrapper');
    const catalogSelects = document.querySelectorAll('.catalog__list-item');
    let lastTabId = 1;
    const stepTab = 1315;

    catalogSelects.forEach(elem => {
        elem.addEventListener('click', () => {
            if (lastTabId != elem.getAttribute('data-catalogId')) {
                catalogSelects.forEach(elem => {
                    elem.classList.contains('catalog__list-item_active')
                        ? elem.classList.remove('catalog__list-item_active')
                        : null;
                });
                elem.classList.add('catalog__list-item_active');
                let j = elem.getAttribute('data-catalogId');
                let step;
                lastTabId = j;
                j == 1 ? (step = 0) : (step = --j * stepTab);

                
                console.log(step);
                catalogTabs.style.transform = `translateX(${-step}px)`;
            }
        });
    });
});

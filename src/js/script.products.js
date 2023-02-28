document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.products__slider', {
        navigation: {
            nextEl: '.products-button-next',
            prevEl: '.products-button-prev'
        }
    });
});

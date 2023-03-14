document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.card__slider', {
        navigation: {
            nextEl: '.card__btn-next',
            prevEl: '.card__btn-prev'
        }
    });
})
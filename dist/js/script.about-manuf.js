document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.about-manufacturer__slider', {
        navigation: {
            nextEl: '.about-manufacturer__btn-next',
            prevEl: '.about-manufacturer__btn-prev'
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const miniNewsBtnPrevImg = document.querySelector('.mini-news__btn-prev img');
    const miniNewsBtnNextImg = document.querySelector('.mini-news__btn-next img');

    const swiper = new Swiper('.mini-news__slider', {
        slidesPerView: 'auto',
        spaceBetween: 31,
        navigation: {
            nextEl: '.mini-news__btn-next',
            prevEl: '.mini-news__btn-prev'
        }
    });
    if (swiper.isBeginning) {
        miniNewsBtnPrevImg.style.opacity = 0.5;
    }
    swiper.on('slideChange', () => {
        if (swiper.isBeginning) {
            miniNewsBtnPrevImg.style.opacity = 0.5;
        } else if (swiper.isEnd) {
            miniNewsBtnNextImg.style.opacity = 0.5;
        } else {
            miniNewsBtnPrevImg.style.opacity = 1;
            miniNewsBtnNextImg.style.opacity = 1;
        }
    });
});

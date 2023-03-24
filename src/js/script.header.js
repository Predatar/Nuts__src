document.addEventListener('DOMContentLoaded', () => {
    const headerSidemenuBtnOpen = document.querySelector('.hamburger');
    const headerSidemenuBtnClose = document.querySelector('.sidemenu__exit');
    const sidemenu = document.querySelector('.sidemenu');

    headerSidemenuBtnOpen.addEventListener('click', () => {
        sidemenu.classList.add('sidemenu_show');
    });
    headerSidemenuBtnClose.addEventListener('click', () => {
        sidemenu.classList.remove('sidemenu_show');
    });

    const isLogin = localStorage.getItem('isLogin');
    const userAccount = document.querySelector('.user-unit__account');
    const userLogin = document.querySelector('.user-unit__login');
    const userRegistration = document.querySelector('.user-unit__registration');
    const sideMenuAccount = document.querySelector('.sidemenu__cabinet');
    const sideMenuLogin = document.querySelector('.sidemenu__login');
    const sideMenuRegistration = document.querySelector('.sidemenu__registration');

    if (isLogin == 'true') {
        userLogin.classList.add('user-unit__login_hide');
        userRegistration.classList.add('user-unit__registration_hide');
        userAccount.classList.add('user-unit__account_show');

        sideMenuAccount.classList.add('sidemenu__cabinet_show');
        sideMenuLogin.classList.add('sidemenu__login_hide');
        sideMenuRegistration.classList.add('sidemenu__registration_hide');
    } else {
        userAccount.classList.remove('user-unit__account_show');
        userLogin.classList.remove('user-unit__login_hide');
        userRegistration.classList.remove('user-unit__registration_hide');

        sideMenuAccount.classList.remove('sidemenu__cabinet_show');
        sideMenuLogin.classList.remove('sidemenu__login_hide');
        sideMenuRegistration.classList.remove('sidemenu__registration_hide');
    }

    const page = document.querySelector('.promo').getAttribute('data-page');
    const headerNavigation = document.querySelectorAll('.header__list-link');
    const sidemenuNavigation = document.querySelectorAll('.sidemenu__list-item');

    const addActiveClassToNavigation = i => {
        headerNavigation[i].classList.add('header__list-link_active');
        sidemenuNavigation[i].classList.add('sidemenu__list-item_active');
    };

    switch (page) {
        case 'product-catalog':
            addActiveClassToNavigation(0);
            break;
        case 'about-company':
            addActiveClassToNavigation(1);
            break;
        case 'payment':
            addActiveClassToNavigation(2);
            break;
        case 'for-clients':
            addActiveClassToNavigation(3);
            break;
        case 'news':
            addActiveClassToNavigation(4);
            break;
        default:
            break;
    }

    const bag = document.querySelector('.header__bag');
    const miniBasket = document.querySelector('.mini-basket');

    bag.addEventListener('click', () => { 
            miniBasket.classList.toggle('mini-basket_hide');
            console.log('mini-basket');
        
    });

    const btnMiniPrev = document.querySelectorAll('.mini-basket__arrow-prev');
    const btnMiniNext = document.querySelectorAll('.mini-basket__arrow-next');
    const inputMiniCount = document.querySelectorAll('#countMini');
    const cost = document.querySelectorAll('.mini-basket__price');
    const totalPrice = document.querySelector('.mini-basket__action-price-total');
    const miniBasketCount = document.querySelectorAll('.mini-basket__count');
    const miniProductPrice = document.querySelectorAll('.mini-basket__product-price');
    let indexPrev;

    const removeActiveClassToBasketCountMini = i => {
        if (Number.isInteger(i)) {
            miniBasketCount[i].classList.remove('mini-basket__count_active');
        } else {
            miniBasketCount.forEach(elem => {
                elem.classList.contains('mini-basket__count_active')
                    ? elem.classList.remove('mini-basket__count_active')
                    : null;
            });
        }
    };
    const addActiveClassToBasketCountMini = i => {
        removeActiveClassToBasketCountMini(i);
        miniBasketCount[i].classList.add('mini-basket__count_active');
    };
    const calculateTotalPriceMini = () => {
        const newMass = [];
        const initialValue = 0;

        cost.forEach(elem => {
            newMass.push(+elem.innerHTML);
        });

        totalPrice.innerHTML = newMass.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
        );
    };
    const calculateTotalPriceProductMini = i => {
        cost[i].innerHTML = +inputMiniCount[i].value * +miniProductPrice[i].innerHTML;
        calculateTotalPriceMini();
    };

    for (let i = 0; i < cost.length; i++) {
        calculateTotalPriceProductMini(i);
    }

    btnMiniPrev.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            if (indexPrev != index) {
                addActiveClassToBasketCountMini(index);
            }
            --inputMiniCount[index].value;
            calculateTotalPriceProductMini(index);
            indexPrev = index;
            setTimeout(() => {
                removeActiveClassToBasketCountMini(index);
            }, 2000);
        });
    });
    btnMiniNext.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            if (indexPrev != index) {
                addActiveClassToBasketCountMini(index);
            }
            ++inputMiniCount[index].value;
            calculateTotalPriceProductMini(index);
            indexPrev = index;
            setTimeout(() => {
                removeActiveClassToBasketCountMini(index);
            }, 2000);
        });
    });
});

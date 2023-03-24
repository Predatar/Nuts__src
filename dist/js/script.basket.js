document.addEventListener('DOMContentLoaded', () => {
    const inputCount = document.querySelectorAll('#count');
    const basketCount = document.querySelectorAll('.basket__count');
    const btnPrev = document.querySelectorAll('.basket__arrow-prev');
    const btnNext = document.querySelectorAll('.basket__arrow-next');
    const allPrice = document.querySelector('.action__price-total');
    const productPrice = document.querySelectorAll('.basket__cost');
    const finalCost = document.querySelectorAll('.basket__total-price');
    let indexPrev;

    const removeActiveClassToBasketCount = i => {
        if (Number.isInteger(i)) {
            basketCount[i].classList.remove('basket__count_active');
            console.log(Number.isInteger(i));
        } else {
            basketCount.forEach(elem => {
                elem.classList.contains('basket__count_active')
                    ? elem.classList.remove('basket__count_active')
                    : null;
            });
        }
    };
    const addActiveClassToBasketCount = i => {
        removeActiveClassToBasketCount(i);
        basketCount[i].classList.add('basket__count_active');
    };
    const calculateTotalPrice = () => {
        const newMass = [];
        const initialValue = 0;

        finalCost.forEach(elem => {
            newMass.push(+elem.innerHTML);
        });

        allPrice.innerHTML = newMass.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
        );
    };
    const calculateTotalPriceProduct = i => {
        finalCost[i].innerHTML = +inputCount[i].value * +productPrice[i].innerHTML;
        calculateTotalPrice();
    };

    for (let i = 0; i < finalCost.length; i++) {
        calculateTotalPriceProduct(i);
    }

    btnPrev.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            if (indexPrev != index) {
                addActiveClassToBasketCount(index);
            }
            --inputCount[index].value;
            calculateTotalPriceProduct(index);
            indexPrev = index;
            setTimeout(() => {
                removeActiveClassToBasketCount(index);
            }, 2000);
        });
    });
    btnNext.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            if (indexPrev != index) {
                addActiveClassToBasketCount(index);
            }
            ++inputCount[index].value;
            calculateTotalPriceProduct(index);
            indexPrev = index;
            setTimeout(() => {
                removeActiveClassToBasketCount(index);
            }, 2000);
        });
    });

    const info = document.querySelector('.info');
    const basket = document.querySelector('.basket')
    const isLogin = localStorage.getItem('isLogin');

    if (isLogin == 'true') {
        info.classList.add('info_hide');
        basket.style.paddingBottom = '93px';
    }
});

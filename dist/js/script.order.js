document.addEventListener('DOMContentLoaded', () => {
    const inputCount = document.querySelectorAll('#count');
    const orderCount = document.querySelectorAll('.order__count');
    const btnPrev = document.querySelectorAll('.order__arrow-prev');
    const btnNext = document.querySelectorAll('.order__arrow-next');
    const allPrice = document.querySelector('.action__price-total');
    const productPrice = document.querySelectorAll('.order__cost');
    const finalCost = document.querySelectorAll('.order__total-price');
    let indexPrev;

    const removeActiveClassToorderCount = i => {
        if (Number.isInteger(i)) {
            orderCount[i].classList.remove('order__count_active');
            console.log(Number.isInteger(i));
        } else {
            orderCount.forEach(elem => {
                elem.classList.contains('order__count_active')
                    ? elem.classList.remove('order__count_active')
                    : null;
            });
        }
    };
    const addActiveClassToorderCount = i => {
        removeActiveClassToorderCount(i);
        orderCount[i].classList.add('order__count_active');
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
                addActiveClassToorderCount(index);
            }
            --inputCount[index].value;
            calculateTotalPriceProduct(index);
            indexPrev = index;
            setTimeout(() => {
                removeActiveClassToorderCount(index);
            }, 2000);
        });
    });
    btnNext.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            if (indexPrev != index) {
                addActiveClassToorderCount(index);
            }
            ++inputCount[index].value;
            calculateTotalPriceProduct(index);
            indexPrev = index;
            setTimeout(() => {
                removeActiveClassToorderCount(index);
            }, 2000);
        });
    });
})
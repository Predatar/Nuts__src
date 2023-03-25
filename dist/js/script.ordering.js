document.addEventListener('DOMContentLoaded', () => {
    const isCorp = localStorage.getItem('corp');

    if (isCorp === 'true') {
        document.querySelector('.ordering__fop').classList.add('ordering_hide');
        document.querySelectorAll('.ordering__fop input').forEach(elem => {
            elem.setAttribute('disabled', '');
        });
    } else {
        document.querySelector('.ordering__corp').classList.add('ordering_hide');
        document.querySelectorAll('.ordering__corp input').forEach(elem => {
            elem.setAttribute('disabled', '');
        });
    }

    const addressSelect = document.querySelector('.address');
    const addressInputs = document.querySelectorAll('.address input');
    const addressInput = document.querySelector('#address');
    const delivery = document.querySelectorAll('.ordering__radio');
    const masDelivery = [delivery[0], delivery[1], delivery[2]];

    const removeActiveClassFromAddressInput = () => {
        addressSelect.classList.contains('address_show')
            ? addressSelect.classList.remove('address_show')
            : null;
        addressInput.classList.contains('address_show')
            ? addressInput.classList.remove('address_show')
            : null;
    };

    addressInputs.forEach(elem => elem.setAttribute('disabled', ''));
    addressInput.setAttribute('disabled', '');

    masDelivery.forEach(elem => {
        elem.addEventListener('click', ({ target }) => {
            if (target.id == masDelivery[0].id) {
                removeActiveClassFromAddressInput();
                addressInputs.forEach(elem => elem.removeAttribute('disabled'));
                addressSelect.classList.add('address_show');
            } else if (target.id == masDelivery[1].id) {
                removeActiveClassFromAddressInput();
                addressInput.removeAttribute('disabled');
                addressInput.classList.add('address_show');
            } else {
                removeActiveClassFromAddressInput();
                addressInputs.forEach(elem => elem.setAttribute('disabled', ''));
                addressInput.setAttribute('disabled', '');
            }
        });
    });

    const inputSelectCountry = document.querySelector('#country');
    const inputselectRegion = document.querySelector('#region');

    const selectHead = document.querySelectorAll('.select__head');
    const selectList = document.querySelector('.address__country .select__list');

    let selectListMas = document.querySelectorAll('.address__country .select__list .select__item'),
        selectRegion,
        selectRegionMas;

    const address = {
        country: '',
        region: '',
        city: ''
    };
    const region = {
        'Moscow region': 'msk',
        'Nizhny Novgorod region': 'nn',
        'Leningrad region': 'spb',
        'Kharkiv region': 'khr',
        'Kyiv region': 'kv',
        'Lviv region': 'lv',
        'Odesa region': 'ods',
        'Minsk region': 'mnk'
    };

    selectHead[0].addEventListener('click', () => {
        selectList.classList.toggle('select__list_show');
    });

    selectList.addEventListener('click', ({ target }) => {
        address.country = target.getAttribute('data-value');
        inputSelectCountry.value = address.country;
        selectHead[0].innerHTML = target.innerHTML;
        selectListMas.forEach(elem => {
            elem.classList.contains('select__item_active')
                ? elem.classList.remove('select__item_active')
                : null;
        });
        target.classList.add('select__item_active');
        selectList.classList.toggle('select__list_show');
        selectRegion = document.querySelector(`.select__list_${address.country}`);
        selectRegionMas = document.querySelectorAll(
            `.select__list_${address.country} .select__item`
        );

        selectRegion.addEventListener('click', ({ target }) => {
            address.region = target.getAttribute('data-value');
            inputselectRegion.value = address.region;
            selectHead[1].innerHTML = target.innerHTML;
            selectRegionMas.forEach(elem => {
                elem.classList.contains('select__item_active')
                    ? elem.classList.remove('select__item_active')
                    : null;
            });
            target.classList.add('select__item_active');
            selectRegion.classList.toggle('select__list_show');
        });
    });

    selectHead[1].addEventListener('click', () => {
        selectRegion.classList.toggle('select__list_show');
    });

    const orderingForm = document.querySelector('.ordering__form');

    orderingForm.addEventListener('submit', e => {
        e.preventDefault();
        document.location.href = '/order-placed.html';
    });

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
});

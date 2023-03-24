document.addEventListener('DOMContentLoaded', () => {
    const isCorp = localStorage.getItem('corp');

    if (isCorp === 'true') {
        document.querySelector('.ordering__fop').classList.add('ordering_hide');
    } else {
        document.querySelector('.ordering__corp').classList.add('ordering_hide');
    }

    const addressSelect = document.querySelector('.address');
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
    }

    masDelivery.forEach(elem => {
        elem.addEventListener('click', ({ target }) => {
            if (target.id == masDelivery[0].id) {
                removeActiveClassFromAddressInput();
                addressSelect.classList.add('address_show');
            } else if (target.id == masDelivery[1].id) {
                removeActiveClassFromAddressInput();
                addressInput.classList.add('address_show');
            } else {
                removeActiveClassFromAddressInput();
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
        document.location.href('@html/order-placed.html');
    });
});

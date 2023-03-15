document.addEventListener('DOMContentLoaded', () => {
    const inputSelectCountry = document.querySelector(' #country');
    const inputSelectRegion = document.querySelector('#region');
    const inputSelectCity = document.querySelector('#city');
    const inputSelectCountryFop = document.querySelector(' #fopCountry');
    const inputSelectRegionFop = document.querySelector('#fopRegion');
    const inputSelectCityFop = document.querySelector('#fopCity');
    const selectHead = document.querySelectorAll('.select__head');
    const selectHeadFop = document.querySelectorAll('.select__fop-head');
    const selectList = document.querySelector('.registration__address .select__list');
    const selectListFop = document.querySelector('.registration__address .select__fop-list');
    const fopCheck = document.querySelector('#fop');
    const fopInputs = [
        document.querySelector('.registration__props'),
        ...document.querySelectorAll('.select__fop-input')
    ];
    let selectListMas = document.querySelectorAll(
            '.registration__address .select__list .select__item'
        ),
        selectRegion,
        selectRegionMas,
        selectCity,
        selectCityMas;
    let selectListMasFop = document.querySelectorAll('.registration__address .select__fop-list .select__fop-item'),
        selectRegionFop,
        selectRegionMasFop,
        selectCityFop,
        selectCityMasFop;

    selectListMas = [selectListMas[0], selectListMas[1], selectListMas[2]];
    selectListMasFop = [selectListMasFop[0], selectListMasFop[1], selectListMasFop[2]];

    const address = {
        country: '',
        region: '',
        city: '',
        address: ''
    };
    const addressFop = {
        country: '',
        region: '',
        city: '',
        address: ''
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
            inputSelectRegion.value = address.region;
            selectHead[1].innerHTML = target.innerHTML;
            selectRegionMas.forEach(elem => {
                elem.classList.contains('select__item_active')
                    ? elem.classList.remove('select__item_active')
                    : null;
            });
            target.classList.add('select__item_active');
            selectRegion.classList.toggle('select__list_show');
            selectCity = document.querySelector(`.select__list_${region[`${address.region}`]}`);
            selectCityMas = document.querySelectorAll(
                `.select__list_${region[`${address.region}`]} .select__item`
            );

            selectCity.addEventListener('click', () => {
                address.city = selectCity.getAttribute('data-value');
                inputSelectCity.value = address.city;
                selectHead[2].innerHTML = target.innerHTML;
                selectCityMas[0].classList.toggle('select__item_active');
                selectCity.classList.toggle('select__list_show');
            });
        });
    });

    selectHead[1].addEventListener('click', () => {
        selectRegion.classList.toggle('select__list_show');
    });
    selectHead[2].addEventListener('click', () => {
        selectCity.classList.toggle('select__list_show');
    });

    fopCheck.addEventListener('change', () => {
        if (fopCheck.checked) {
            fopInputs.forEach(elem => {
                elem.removeAttribute('disabled');
            });
        } else {
            fopInputs.forEach(elem => {
                elem.setAttribute('disabled', 'disabled');
            });
        }
    });

    selectHeadFop[0].addEventListener('click', () => {
        selectListFop.classList.toggle('select__fop-list_show');
    });

    selectListFop.addEventListener('click', ({ target }) => {
        addressFop.country = target.getAttribute('data-value');
        inputSelectCountryFop.value = addressFop.country;
        selectHeadFop[0].innerHTML = target.innerHTML;
        selectListMasFop.forEach(elem => {
            elem.classList.contains('select__fop-item_active')
                ? elem.classList.remove('select__fop-item_active')
                : null;
        });
        target.classList.add('select__fop-item_active');
        selectListFop.classList.toggle('select__fop-list_show');
        selectRegionFop = document.querySelector(`.select__fop-list_${addressFop.country}`);
        selectRegionMasFop = document.querySelectorAll(
            `.select__fop-list_${addressFop.country} .select__item`
        );

        selectRegionFop.addEventListener('click', ({ target }) => {
            addressFop.region = target.getAttribute('data-value');
            inputSelectRegionFop.value = addressFop.region;
            selectHeadFop[1].innerHTML = target.innerHTML;
            selectRegionMasFop.forEach(elem => {
                elem.classList.contains('select__fop-item_active')
                    ? elem.classList.remove('select__fop-item_active')
                    : null;
            });
            target.classList.add('select__fop-item_active');
            selectRegionFop.classList.toggle('select__fop-list_show');
            selectCityFop = document.querySelector(`.select__fop-list_${region[`${addressFop.region}`]}`);
            selectCityMasFop = document.querySelectorAll(
                `.select__fop-list_${region[`${addressFop.region}`]} .select__fop-item`
            );

            selectCityFop.addEventListener('click', () => {
                addressFop.city = selectCityFop.getAttribute('data-value');
                inputSelectCityFop.value = addressFop.city;
                selectHeadFop[2].innerHTML = target.innerHTML;
                selectCityMasFop[0].classList.toggle('select__fop-item_active');
                selectCityFop.classList.toggle('select__fop-list_show');
            });
        });
    });

    selectHeadFop[1].addEventListener('click', () => {
        selectRegionFop.classList.toggle('select__fop-list_show');
    });
    selectHeadFop[2].addEventListener('click', () => {
        selectCityFop.classList.toggle('select__fop-list_show');
    });
});

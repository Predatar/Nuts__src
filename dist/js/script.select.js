document.addEventListener('DOMContentLoaded', () => {
    const inputSelectCountry = document.querySelector(' #country');
    const inputSelectRegion = document.querySelector('#region');
    const inputSelectCity = document.querySelector('#city');
    const selectHead = document.querySelectorAll('.select__head');
    const selectList = document.querySelector('.registration__address .select__list');
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

    selectListMas = [selectListMas[0], selectListMas[1], selectListMas[2]];

    console.log(fopInputs);

    const address = {
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
                elem.removeAttribute('disabled')
            })
        } else {
            fopInputs.forEach(elem => {
                elem.setAttribute('disabled', 'disabled')
            })
        }
    });
});

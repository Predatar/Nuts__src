document.addEventListener('DOMContentLoaded', () => {
    const inputSelectCountryFop = document.querySelector('#countryFop');
    const inputselectRegionFop = document.querySelector('#regionFop');

    const inputSelectCountryCorp = document.querySelector(' #countryCorp');
    const inputSelectRegionCorp = document.querySelector('#regionCorp');

    const inputSelectCountryLegal = document.querySelector(' #countryLegal');
    const inputSelectRegionLegal = document.querySelector('#regionLegal');

    const selectHeadFop = document.querySelectorAll('.select__head');
    const selectHeadCorp = document.querySelectorAll('.select__head-corp');
    const selectHeadLegal = document.querySelectorAll('.select__head-legal');

    const selectListFop = document.querySelector('.address__country .select__list');
    const selectListCorp = document.querySelector('.select__list-corp');
    const selectListLegal = document.querySelector('.select__list-legal');

    let selectListFopMas = document.querySelectorAll(
            '.address__country .select__list .select__item'
        ),
        selectRegionFop,
        selectRegionFopMas;

    let selectListMasCorp = document.querySelectorAll('.select__list-corp .select__item'),
        selectRegionCorp,
        selectRegionMasCorp;

    let selectListMasLegal = document.querySelectorAll('.select__list-legal .select__item'),
        selectRegionLegal,
        selectRegionMasLegal;

    selectListFopMas = [selectListFopMas[0], selectListFopMas[1], selectListFopMas[2]];
    selectListMasCorp = [selectListMasCorp[0], selectListMasCorp[1], selectListMasCorp[2]];
    selectListMasLegal = [selectListMasLegal[0], selectListMasLegal[1], selectListMasLegal[2]];

    const address = {
        country: '',
        region: '',
        city: ''
    };
    const addressCorp = {
        country: '',
        region: '',
        city: ''
    };
    const addressLegal = {
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

    selectHeadFop[0].addEventListener('click', () => {
        selectListFop.classList.toggle('select__list_show');
    });

    selectListFop.addEventListener('click', ({ target }) => {
        address.country = target.getAttribute('data-value');
        inputSelectCountryFop.value = address.country;
        selectHeadFop[0].innerHTML = target.innerHTML;
        selectListFopMas.forEach(elem => {
            elem.classList.contains('select__item_active')
                ? elem.classList.remove('select__item_active')
                : null;
        });
        target.classList.add('select__item_active');
        selectListFop.classList.toggle('select__list_show');
        selectRegionFop = document.querySelector(`.select__list_${address.country}`);
        selectRegionFopMas = document.querySelectorAll(
            `.select__list_${address.country} .select__item`
        );

        selectRegionFop.addEventListener('click', ({ target }) => {
            address.region = target.getAttribute('data-value');
            inputselectRegionFop.value = address.region;
            selectHeadFop[1].innerHTML = target.innerHTML;
            selectRegionFopMas.forEach(elem => {
                elem.classList.contains('select__item_active')
                    ? elem.classList.remove('select__item_active')
                    : null;
            });
            target.classList.add('select__item_active');
            selectRegionFop.classList.toggle('select__list_show');
        });
    });

    selectHeadFop[1].addEventListener('click', () => {
        selectRegionFop.classList.toggle('select__list_show');
    });

    selectHeadCorp[0].addEventListener('click', () => {
        selectListCorp.classList.toggle('select__list_show');
    });

    selectListCorp.addEventListener('click', ({ target }) => {
        addressCorp.country = target.getAttribute('data-value');
        inputSelectCountryCorp.value = addressCorp.country;
        selectHeadCorp[0].innerHTML = target.innerHTML;
        selectListMasCorp.forEach(elem => {
            elem.classList.contains('select__item_active')
                ? elem.classList.remove('select__item_active')
                : null;
        });
        target.classList.add('select__item_active');
        selectListCorp.classList.toggle('select__list_show');
        selectRegionCorp = document.querySelector(
            `.select__head-corp ~ .select__list_${addressCorp.country}`
        );
        selectRegionMasCorp = document.querySelectorAll(
            `.select__list_${addressCorp.country} .select__item`
        );

        selectRegionCorp.addEventListener('click', ({ target }) => {
            addressCorp.region = target.getAttribute('data-value');
            inputSelectRegionCorp.value = addressCorp.region;
            selectHeadCorp[1].innerHTML = target.innerHTML;
            selectRegionMasCorp.forEach(elem => {
                elem.classList.contains('select__item_active')
                    ? elem.classList.remove('select__item_active')
                    : null;
            });
            target.classList.add('select__item_active');
            selectRegionCorp.classList.toggle('select__list_show');
        });
    });

    selectHeadCorp[1].addEventListener('click', () => {
        selectRegionCorp.classList.toggle('select__list_show');
    });

    selectHeadLegal[0].addEventListener('click', () => {
        selectListLegal.classList.toggle('select__list_show');
    });

    selectListLegal.addEventListener('click', ({ target }) => {
        addressLegal.country = target.getAttribute('data-value');
        inputSelectCountryLegal.value = addressLegal.country;
        console.log(inputSelectCountryLegal.value);
        selectHeadLegal[0].innerHTML = target.innerHTML;
        selectListMasLegal.forEach(elem => {
            elem.classList.contains('select__item_active')
                ? elem.classList.remove('select__item_active')
                : null;
        });
        console.log(addressLegal);
        target.classList.add('select__item_active');
        selectListLegal.classList.toggle('select__list_show');
        selectRegionLegal = document.querySelector(
            `.select__head-legal ~ .select__list_${addressLegal.country}`
        );
        console.log(selectRegionLegal);
        selectRegionMasLegal = document.querySelectorAll(
            `.select__list_${addressLegal.country} .select__item`
        );

        selectRegionLegal.addEventListener('click', ({ target }) => {
            addressLegal.region = target.getAttribute('data-value');
            inputSelectRegionLegal.value = addressLegal.region;
            selectHeadLegal[1].innerHTML = target.innerHTML;
            selectRegionMasLegal.forEach(elem => {
                elem.classList.contains('select__item_active')
                    ? elem.classList.remove('select__item_active')
                    : null;
            });
            target.classList.add('select__item_active');
            selectRegionLegal.classList.toggle('select__list_show');
        });
    });

    selectHeadLegal[1].addEventListener('click', () => {
        selectRegionLegal.classList.toggle('select__list_show');
    });

    if(localStorage.getItem('corp') == 'true') {
        document.querySelector('.address__fop').classList.add('address_hide')
    }
    else {
        document.querySelector('.address__corp').classList.add('address_hide')
    }
});

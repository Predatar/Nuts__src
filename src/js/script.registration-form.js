document.addEventListener('DOMContentLoaded', () => {
    const registerFrom = document.querySelector('.registration__form');

    const fullName = document.querySelector('#fullname');
    const email = document.querySelector('#email');
    const tel = document.querySelector('#tel');
    const country = document.querySelector('#country');
    const region = document.querySelector('#region');
    const city = document.querySelector('#city');
    const address = document.querySelector('#address');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');

    const isFop = document.querySelector('#fop');
    const EDRPO = document.querySelector('#EDRPO');
    const countryFop = document.querySelector('#fopCountry');
    const regionFop = document.querySelector('#fopRegion');
    const cityFop = document.querySelector('#fopCity');
    const addressFop = document.querySelector('#addressFop');

    const OKPO = document.querySelector('#OKPO');
    const countryCorp = document.querySelector('#corpCountry');
    const regionCorp = document.querySelector('#corpRegion');
    const cityCorp = document.querySelector('#corpCity');
    const addressCorp = document.querySelector('#addressCorp');
    const indexCorp = document.querySelector('#index');

    const person = {};

    registerFrom.addEventListener('submit', e => {
        e.preventDefault();

        const isCorp = localStorage.getItem('corp');

        if (password.value == confirmPassword.value) {
            person.fullName = fullName.value;
            person.email = email.value;
            person.tel = tel.value;
            person.country = country.value;
            person.region = region.value;
            person.city = city.value;
            person.address = address.value;
            person.password = password.value;
        }
        if (isFop.checked) {
            console.log(`isFop ${true}`);
            person.isFop = true;
            person.EDRPO = EDRPO.value;
            person.countryFop = countryFop.value;
            person.regionFop = regionFop.value;
            person.cityFop = cityFop.value;
            person.addressFop = addressFop.value;
        }
        if (isCorp == 'true') {
            console.log(`isCorp ${true}`);
            person.isCorp = true;
            person.OKPO = OKPO.value;
            person.countryCorp = countryCorp.value;
            person.regionCorp = regionCorp.value;
            person.cityCorp = cityCorp.value;
            person.addressCorp = addressCorp.value;
            person.indexCorp = indexCorp.value;
        }
        localStorage.setItem(person.email, JSON.stringify(person));
        document.location.href = '/login.html';
    });
});

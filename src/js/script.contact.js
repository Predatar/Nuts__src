document.addEventListener('DOMContentLoaded', () => {
    const contactFop = document.querySelector('.contact__fop');
    const contactCorp = document.querySelector('.contact__corp');

    if (localStorage.getItem('corp') == 'true') {
        contactFop.classList.add('contact_hide');
        contactCorp.classList.remove('contact_hide');
    } else {
        contactFop.classList.remove('contact_hide');
        contactCorp.classList.add('contact_hide');
    }

    const form = document.querySelectorAll('.contact__form');
    const person = JSON.parse(localStorage.getItem(localStorage.getItem('nameLogined')));

    const fullname = document.querySelector('#fullname');
    const email = document.querySelector('#email');
    const tel = document.querySelector('#tel');

    const company = document.querySelector('#company');
    const contactFace = document.querySelector('#contact-face');
    const emailCorp = document.querySelector('#emailCorp');
    const telCorp = document.querySelector('#telCorp');

    form[0].addEventListener('submit', e => {
        person.fullName = fullname.ariaValueMax;
        person.email = email.ariaValueMax;
        person.tel = tel.value;

        localStorage.setItem(person.email, JSON.stringify(person));
    });

    form[1].addEventListener('submit', e => {
        person.company = company.value;
        person.contactFace = contactFace.value;
        person.contactEmail = emailCorp.value;
        person.contactTel = telCorp.value;

        localStorage.setItem(person.email, JSON.stringify(person));
    });
});

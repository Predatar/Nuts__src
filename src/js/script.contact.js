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
});

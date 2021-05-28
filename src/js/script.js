window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header-navphoneversion'),
    menuItem = document.querySelectorAll('.header-navitem'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header-navphoneversion_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header-navphoneversion_active');
        })
    })
})
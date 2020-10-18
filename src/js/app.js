const burgerButton = document.querySelector ('.header__burger');
const content = document.querySelector ('.not-only__content');
const menu = document.querySelector ('.header__nav');
const menuItem = document.querySelectorAll ('.header__nav__item');
const menuItemLink = document.querySelectorAll ('.header__nav__item__link');

burgerButton.addEventListener ('click', () => {
    
    const contentStyle = window.getComputedStyle(content, null);
    if (contentStyle.display === 'none') {
        content.style.display = 'flex';
    } else {
        content.style.display = 'none';
    }
    menu.classList.toggle ('header__nav--for_mobile');
    menuItem.forEach (item =>{
        item.classList.toggle('header__nav--for_mobile__item');
    });
    menuItemLink.forEach (item =>{
        item.classList.toggle ('header__nav--for_mobile__item__link');
    });

    const burgerButtonStyle = window.getComputedStyle(burgerButton, null);

    if (burgerButtonStyle.transform === 'none') {
        burgerButton.style.transform = 'rotate(90deg)';
    } else {
        burgerButton.style.transform = 'none';
    }
    
});
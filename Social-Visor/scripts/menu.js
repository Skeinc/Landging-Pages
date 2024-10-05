// Переключатель меню
const menuToggler = document.querySelector('#menu');
// Переключатель языка
const languageToggler = document.querySelector('#language');
// Выпадающее меню выбора языка
const languageDropdown = document.querySelector('#language-dropdown');
// Переключатель языка на моб.
const languageTogglerMobile = document.querySelector('#language-mobile');
// Выпадающее меню выбора языка на моб.
const languageDropdownMobile = document.querySelector('#language-dropdown-mobile');
// Переключатель продуктов
const productsToggler = document.querySelector('#products-toggler');
// Переключатель продуктов на моб.
const productsTogglerMobile = document.querySelector('#products-toggler-mobile');
// Выпадающее меню продуктов
const productsDropdown = document.querySelector('#products-dropdown');
// Выпадающее меню продуктов на моб.
const productsDropdownMobile = document.querySelector('#products-dropdown-mobile');
// Выпадающее меню
const menuOverlay = document.querySelector('.menu-overlay');

// Обработка нажатия на переключатель меню
function menuTogglerHandler() {
    menuToggler.classList.toggle('menu-close');

    if(menuToggler.classList.contains('menu-close')) {
        menuOverlay.style.visibility = 'visible';
        menuOverlay.style.opacity = '1';
        menuOverlay.style.height = 'auto';
    }
    else {
        menuOverlay.style.visibility = 'hidden';
        menuOverlay.style.opacity = '0';
        menuOverlay.style.height = '0px';
    }
}

// Обработка нажатия на переключатель языка
function languageTogglerHandler() {
    languageToggler.classList.toggle('language-open');
}

// Обработка нажатия на переключатель языка
function languageTogglerMobileHandler() {
    languageTogglerMobile.classList.toggle('language-open');
}

// Обработка нажатия на переключатель продуктов
function productsTogglerHandler() {
    productsToggler.classList.toggle('products-open');

    if(productsToggler.classList.contains('products-open')) {
        productsDropdown.style.visibility = 'visible';
        productsDropdown.style.opacity = '1';
    }
    else {
        productsDropdown.style.opacity = '0';
        productsDropdown.style.visibility = 'hidden';
    }
}

// Обработка нажатия на переключатель продуктов на моб.
function productsTogglerMobileHandler() {
    productsTogglerMobile.classList.toggle('products-open');

    if(productsTogglerMobile.classList.contains('products-open')) {
        productsDropdownMobile.style.visibility = 'visible';
        productsDropdownMobile.style.opacity = '1';
        productsDropdownMobile.style.height = 'auto';
    }
    else {
        productsDropdownMobile.style.height = '0px';
        productsDropdownMobile.style.opacity = '0';
        productsDropdownMobile.style.visibility = 'hidden';
    }
}
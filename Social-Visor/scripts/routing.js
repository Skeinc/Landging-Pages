const ROUTES = {
    login: 'https://app.socialvisor.ru/login',
    register: 'https://app.socialvisor.ru/register',
    overview: '/index.html',
    products: '/pages/products.html'
}

function redirectToLogin() {
    window.location.href = ROUTES.login;
}

function redirectToRegister() {
    window.location.href = ROUTES.register;
}

function redirectToOverview() {
    window.location.href = ROUTES.overview;
}

function redirectToProducts() {
    window.location.href = ROUTES.products;
}

function redirectToTariffs() {
    window.location.href = '';
}

function redirectToCompany() {
    window.location.href = '';
}

function redirectToBlog() {
    window.location.href = '';
}

function redirectToFAQ() {
    window.location.href = '';
}
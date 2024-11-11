const ROUTES = {
    login: 'https://app.socialvisor.ru/login',
    register: 'https://app.socialvisor.ru/register',
    overview: '/index.html',
    products: '/pages/products.html',
    tariffs: '/pages/tariffs.html',
    company: '/pages/company.html',
    faq: '/pages/faq.html',
    offer: '/pages/offer.html',
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
    window.location.href = ROUTES.tariffs;
}

function redirectToCompany() {
    window.location.href = ROUTES.company;
}

function redirectToBlog() {
    window.location.href = '';
}

function redirectToFAQ() {
    window.location.href = ROUTES.faq;
}
function redirectToOffer() {
    window.location.href = ROUTES.offer;
}
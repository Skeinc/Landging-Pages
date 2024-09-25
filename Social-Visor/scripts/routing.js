const ROUTES = {
    login: 'https://app.socialvisor.ru/login',
    register: 'https://app.socialvisor.ru/register'
}

function redirectToLogin() {
    window.location.href = ROUTES.login;
}

function redirectToRegister() {
    window.location.href = ROUTES.register
}
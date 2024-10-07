// Кнопки выбора оплаты тарифа
const tariffsPaymentButtons = document.querySelectorAll('.payment-button');
// Индекс активной кнопки
let activePaymentButton = 0;

// Устанавливаем по умолчанию активной первую кнопку
tariffsPaymentButtons[activePaymentButton].classList.add('payment-button__active');

// Метод для смены активной кнопки
function toggleActivePaymentButton(buttonIndex) {
    // Очищаем все классы у кнопок, чтобы избавиться от активной кнопки
    for(let index = 0; index < tariffsPaymentButtons.length; index++) {
        tariffsPaymentButtons[index].classList.remove('payment-button__active');
    }

    // Устанавливаем активную кнопку
    activePaymentButton = buttonIndex;
    tariffsPaymentButtons[activePaymentButton].classList.add('payment-button__active');
}
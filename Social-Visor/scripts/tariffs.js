// Кнопки выбора оплаты тарифа
const tariffsPaymentButtons = document.querySelectorAll('.payment-button');
// Подсказки о 30% скидке
const captionsForSale = document.querySelectorAll('.header-price__subscription');
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

    if(activePaymentButton !== 0) {
        captionsForSale.forEach((caption) => {
            caption.style.display = 'none';
        })
    }
    else {
        captionsForSale.forEach((caption) => {
            caption.style.display = 'block';
        })
    }
}
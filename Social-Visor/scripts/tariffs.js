// Кнопки выбора оплаты тарифа
const tariffsPaymentButtons = document.querySelectorAll('.payment-button');
// Подсказки о 30% скидке
const captionsForSale = document.querySelectorAll('.header-price__subscription');
// Индекс активной кнопки
let activePaymentButton = 0;

// Слайдер
const slider = document.getElementById('tariff-slider');
const ellipses = document.querySelectorAll('.ellipse');

// Устанавливаем по умолчанию активной первую кнопку
tariffsPaymentButtons[activePaymentButton].classList.add('payment-button__active');

// Метод для смены активной кнопки
function toggleActivePaymentButton(buttonIndex) {
    // Очищаем все классы у кнопок, чтобы избавиться от активной кнопки
    for (let index = 0; index < tariffsPaymentButtons.length; index++) {
        tariffsPaymentButtons[index].classList.remove('payment-button__active');
    }

    // Устанавливаем активную кнопку
    activePaymentButton = buttonIndex;
    tariffsPaymentButtons[activePaymentButton].classList.add('payment-button__active');

    if (activePaymentButton !== 0) {
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

// Функция для обновления элипсов
function updateEllipses() {
    const value = slider.value;
    ellipses.forEach((ellipse, index) => {
      if (index < value) {
        ellipse.style.display = 'none';
      } else {
        ellipse.style.display = 'block';
      }
    });
  }
  
// Вызываем функцию при инициализации страницы и при использовании слайдера
document.addEventListener('DOMContentLoaded', updateEllipses);
slider.addEventListener('input', updateEllipses);

// Устанавливаем начальные значения при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.setProperty('--value', value + '%');
});

// Обновляем фон ползунка при изменении значения
slider.addEventListener('input', function() {
    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.setProperty('--value', value + '%');
});
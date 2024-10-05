// Кнопка выбора продуктов
const productsItemsButtons = document.querySelectorAll('.products-grid__item');
// Активный индекс продукта
let activeProductIndex = 0;

// Выбор активного продукта
function selectActiveProduct(index) {
    if(activeProductIndex === index) return;
    
    // Очищаем все классы
    for(let i = 0; i < productsItemsButtons.length; i++) {
        productsItemsButtons[i].classList.remove('products-grid__item__active');
    }

    // Выбираем активный продукт
    productsItemsButtons[index].classList.toggle('products-grid__item__active');
    activeProductIndex = index;
}
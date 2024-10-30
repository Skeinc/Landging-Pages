const companyProductControllers = document.querySelectorAll('.company-product__controller');
const companyProductBlocks = document.querySelectorAll('.company-product');
let activeProductIndex = 0;

// Устанавливаем начальный элемент активным
companyProductControllers[activeProductIndex].classList.add('company-product__controller__active');
companyProductBlocks[activeProductIndex].style.display = 'flex';

// Функция для смены активного продукта
function toggleActiveCompanyProduct(index) {
    activeProductIndex = index;

    for(let k = 0; k < companyProductBlocks.length; k++) {
        companyProductControllers[k].classList.remove('company-product__controller__active');
        companyProductBlocks[k].style.display = 'none';
    }

    companyProductControllers[activeProductIndex].classList.add('company-product__controller__active');
    companyProductBlocks[activeProductIndex].style.display = 'flex';
}
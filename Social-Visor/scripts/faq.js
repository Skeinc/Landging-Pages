const topicItems = document.querySelectorAll('.topic-item');
const questionItems = document.querySelectorAll('.question-item');
let activeIndex = 0;

// Устанавливаем активный элемент по умолчанию
topicItems[activeIndex].classList.add('topic-item__active');

// Функция для смены активного индекса темы
function toggleActiveTopic(index) {
    // Очищаем классы у других элементов
    for(let i = 0; i < topicItems.length; i++) {
        topicItems[i].classList.remove('topic-item__active');
    }

    // Устанавливаем новый активный элемент
    activeIndex = index;
    topicItems[activeIndex].classList.add('topic-item__active');
}

// Функция для смены видимости вопроса
function toggleQuestionVisibleStatus(index) {
    // Устанавливаем необходимую видимость
    questionItems[index].classList.toggle('question-item__open');
}
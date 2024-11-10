const topicItems = document.querySelectorAll('.topic-item');
const topicItemsMobile = document.querySelectorAll('.topic-item__mobile');
const questionItems = document.querySelectorAll('.question-item');
const questionItemsMobile = document.querySelectorAll('.question-item__mobile');
const questionBlocks = document.querySelectorAll('.faq-overview__questions-mobile');
let activeIndex = 0;

// Устанавливаем активный элемент по умолчанию
topicItems[activeIndex].classList.add('topic-item__active');
topicItemsMobile[activeIndex].classList.add('topic-item__active');
questionBlocks[activeIndex].style.display = "flex";

// Функция для смены активного индекса темы
function toggleActiveTopic(index) {
    // Очищаем классы у других элементов
    for(let i = 0; i < topicItems.length; i++) {
        topicItems[i].classList.remove('topic-item__active');
        topicItemsMobile[i].classList.remove('topic-item__active');
        questionBlocks[i].style.display = "none";
    }

    // Устанавливаем новый активный элемент
    activeIndex = index;
    topicItems[activeIndex].classList.add('topic-item__active');
    topicItemsMobile[activeIndex].classList.add('topic-item__active');
    questionBlocks[activeIndex].style.display = "flex";
}

// Функция для смены видимости вопроса
function toggleQuestionVisibleStatus(index) {
    // Устанавливаем необходимую видимость
    questionItems[index]?.classList.toggle('question-item__open');
    questionItemsMobile[index].classList.toggle('question-item__open');
}
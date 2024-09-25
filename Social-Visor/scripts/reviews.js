document.addEventListener('DOMContentLoaded', () => {
    const reviewsRow = document.querySelector('.reviews-row');
    const reviewsItems = Array.from(reviewsRow.children);
    
    // Клонируем элементы для бесконечного скроллинга
    reviewsItems.forEach(item => {
        const clone = item.cloneNode(true);
        reviewsRow.appendChild(clone);
    });
    
    let lastTimestamp = 0;
    let scrollAmount = 0;
    const scrollSpeed = 0.075;

    function scrollMetrics(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        
        const timeDiff = timestamp - lastTimestamp;

        scrollAmount -= scrollSpeed * timeDiff;

        if (Math.abs(scrollAmount) >= reviewsRow.scrollWidth / 2) {
            scrollAmount = 0;
        }

        reviewsRow.style.transform = `translateX(${scrollAmount}px)`;
        lastTimestamp = timestamp;

        // Продолжаем анимацию
        requestAnimationFrame(scrollMetrics);
    }

    // Запуск анимации
    requestAnimationFrame(scrollMetrics);
});
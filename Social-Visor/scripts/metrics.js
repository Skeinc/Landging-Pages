document.addEventListener('DOMContentLoaded', () => {
    const metricsRow = document.querySelector('.metrics-row');
    const metricsItems = Array.from(metricsRow.children);
    
    // Клонируем элементы для бесконечного скроллинга
    metricsItems.forEach(item => {
        const clone = item.cloneNode(true);
        metricsRow.appendChild(clone);
    });
    
    let lastTimestamp = 0;
    let scrollAmount = 0;
    const scrollSpeed = 1;

    function scrollMetrics(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        
        const timeDiff = timestamp - lastTimestamp;

        scrollAmount -= scrollSpeed * timeDiff / 1000; // скорость в процентах в секунду

        if (Math.abs(scrollAmount) >= 100) {
            scrollAmount = 0;
        }

        metricsRow.style.transform = `translateX(${scrollAmount}%)`;
        lastTimestamp = timestamp;

        // Продолжаем анимацию
        requestAnimationFrame(scrollMetrics);
    }

    // Запуск анимации
    requestAnimationFrame(scrollMetrics);
});
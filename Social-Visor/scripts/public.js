document.addEventListener('DOMContentLoaded', () => {
    const publicRow = document.querySelector('.public-row');
    const publicItems = Array.from(publicRow.children);
    
    // Клонируем элементы для бесконечного скроллинга
    publicItems.forEach(item => {
        const clone = item.cloneNode(true);
        publicRow.appendChild(clone);
    });
    
    let lastTimestamp = 0;
    let scrollAmount = 0;
    const scrollSpeed = 0.075;

    function scrollPublic(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        
        const timeDiff = timestamp - lastTimestamp;

        scrollAmount -= scrollSpeed * timeDiff;

        if (Math.abs(scrollAmount) >= publicRow.scrollWidth / 2) {
            scrollAmount = 0;
        }

        publicRow.style.transform = `translateX(${scrollAmount}px)`;
        lastTimestamp = timestamp;

        // Продолжаем анимацию
        requestAnimationFrame(scrollPublic);
    }

    // Запуск анимации
    requestAnimationFrame(scrollPublic);
});
const slider = document.querySelector('.slider');
const handle = document.querySelector('.slider-handle');

let isDragging = false;

handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    handle.classList.add('active');
    const startX = e.clientX - handle.getBoundingClientRect().left;

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const x = e.clientX - slider.getBoundingClientRect().left - startX;
        const minX = 0;
        const maxX = slider.clientWidth - handle.clientWidth;
        const newPosition = Math.min(maxX, Math.max(minX, x));

        handle.style.left = newPosition + 'px';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        handle.classList.remove('active');
    });
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
});
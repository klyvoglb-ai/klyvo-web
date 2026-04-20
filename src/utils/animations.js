/**
 * Centralized Animation Logic for KLYVO
 */

export const initScrollReveal = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's a counter, trigger countUp
                if (entry.target.dataset.targetValue) {
                    animateValue(entry.target);
                    observer.unobserve(entry.target); // Only count once
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .counter-item').forEach(el => observer.observe(el));
};

const animateValue = (obj) => {
    const target = parseInt(obj.dataset.targetValue);
    let start = 0;
    const duration = 2000;
    let startTimestamp = null;
    
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * target) + (obj.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    
    window.requestAnimationFrame(step);
};

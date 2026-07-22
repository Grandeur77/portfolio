/**
 * Mileesha Fernando Portfolio - Interactivity
 * Inspired by wyomi-ranasinghe.carrd.co
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Auto-update current year in footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // 2. Smooth Scrolling for Navigation Links
    document.querySelectorAll('.carrd-nav a, .carrd-navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const sidebar = document.getElementById('sidebar');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            if (navLinks) navLinks.classList.toggle('active');
            if (sidebar) sidebar.classList.toggle('active');
        });
    }

    // Trigger animations for progress bars
    setTimeout(() => {
        const progressFills = document.querySelectorAll('.progress-fill');
        progressFills.forEach(fill => {
            const targetWidth = fill.style.width;
            fill.style.width = '0%';
            setTimeout(() => {
                fill.style.width = targetWidth;
            }, 100);
        });
    }, 300);
});

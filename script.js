// Filtrar atividades portifólio
'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const category = this.getAttribute('data-filter');
            portfolioItems.forEach(function (item) {
                const itemCategory = item.getAttribute('data-category');
                if (category === 'all' || category === itemCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});


const switcher = document.querySelector('.btntheme');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    console.log('current class name: ' + className);
});


//ScrollReveal

const sr = ScrollReveal({
    origin: 'left',
    distance: '100px',
    duration: 1000,
    delay: 300,
    reset: true
});


sr.reveal('.s1', { interval: 200 });
sr.reveal(`.home-container, .service-container, .resume-container, .portfolio-container, .contact-container, .faq-container, .footer-container`)
// Välj alla FAQ items som har en toggle-knapp
const faqItems = document.querySelectorAll('.faq-item');

// Loopa igenom varje FAQ item och lägg till en click event listener
faqItems.forEach(item => {
    const button = item.querySelector('.btn-toggle-switch');
    const arrow = button.querySelector('i');
    
    // Event listener för klick på knappen
    button.addEventListener('click', () => {
        // Toggle 'open'-klassen på FAQ-item
        item.classList.toggle('open');
        
        // Visa eller dölj svaret baserat på 'open'-klassen
        const answer = item.querySelector('.faq-answer');
        if (item.classList.contains('open')) {
            answer.style.display = 'block';
            arrow.classList.replace('fa-angle-down', 'fa-angle-up');
        } else {
            answer.style.display = 'none';
            arrow.classList.replace('fa-angle-up', 'fa-angle-down');
        }
    });
});

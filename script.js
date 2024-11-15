// Smooth scroll effect for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').replace('.html', '');
        window.location.href = link.getAttribute('href'); // Navigate to new page
    });
});

// Example animation: Add a bounce effect to the hero section title
document.querySelector('.hero h1').addEventListener('mouseover', () => {
    const title = document.querySelector('.hero h1');
    title.style.animation = 'bounce 1s ease';
    title.addEventListener('animationend', () => {
        title.style.animation = '';
    });
});

// Contact form submission (placeholder behavior)
if (document.querySelector('form')) {
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thanks for reaching out! We will contact you soon.');
    });
}

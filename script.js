// Toggle menu for mobile devices
const header = document.querySelector('.header');
const menuIcon = document.createElement('div');
menuIcon.classList.add('menu-icon');
menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
header.appendChild(menuIcon);

menuIcon.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
    menuIcon.querySelector('i').classList.toggle('fa-times');
});

// Scroll sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu when clicking a link
        document.querySelector('.navbar').classList.remove('active');
        menuIcon.querySelector('i').classList.remove('fa-times');
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, sending email or storing in a database
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Add scroll reveal animations
window.addEventListener('load', () => {
    const sr = ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    sr.reveal('.home-content', { origin: 'top' });
    sr.reveal('.social-media, .btn', { origin: 'bottom' });
    sr.reveal('.about-content', { origin: 'left' });
    sr.reveal('.skills-container', { origin: 'bottom' });
    sr.reveal('.project-box', { origin: 'bottom', interval: 200 });
    sr.reveal('.contact form', { origin: 'bottom' });
});
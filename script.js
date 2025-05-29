document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const auth = document.querySelector('.auth');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        auth.classList.toggle('active');
        
        // Toggle hamburger to X
        const lines = this.querySelectorAll('.line');
        if (this.classList.contains('active')) {
            lines[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            lines[0].style.transform = 'rotate(0) translate(0)';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'rotate(0) translate(0)';
        }
    });
    
    // Make flight search sticky on scroll
    const flightSearch = document.querySelector('.flight-search');
    const heroHeight = document.querySelector('.hero').offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > heroHeight - 100) {
            flightSearch.classList.add('sticky');
        } else {
            flightSearch.classList.remove('sticky');
        }
    });
    
    // Destination carousel navigation
    const carousel = document.querySelector('.destination-carousel');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    nextBtn.addEventListener('click', function() {
        carousel.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
    
    prevBtn.addEventListener('click', function() {
        carousel.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });
    
    // Testimonial carousel navigation
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const testimonialPrev = document.createElement('button');
    const testimonialNext = document.createElement('button');
    
    testimonialPrev.innerHTML = '<i class="fas fa-chevron-left"></i>';
    testimonialNext.innerHTML = '<i class="fas fa-chevron-right"></i>';
    
    testimonialPrev.className = 'testimonial-prev';
    testimonialNext.className = 'testimonial-next';
    
    const testimonialControls = document.createElement('div');
    testimonialControls.className = 'testimonial-controls';
    testimonialControls.appendChild(testimonialPrev);
    testimonialControls.appendChild(testimonialNext);
    
    document.querySelector('.testimonials').appendChild(testimonialControls);
    
    testimonialNext.addEventListener('click', function() {
        testimonialCarousel.scrollBy({
            left: 500,
            behavior: 'smooth'
        });
    });
    
    testimonialPrev.addEventListener('click', function() {
        testimonialCarousel.scrollBy({
            left: -500,
            behavior: 'smooth'
        });
    });
    
    // Tab functionality for flight search
    const tabs = document.querySelectorAll('.search-tabs button');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Form submission
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real implementation, this would handle form submission
            alert('Form submitted! In a real implementation, this would send the data to the server.');
        });
    });
    
    // Current year for footer
    document.querySelector('.copyright p').innerHTML = `© ${new Date().getFullYear()} Emirates. All rights reserved.`;
    
    // Dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.body.appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            this.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            this.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add hover effect to destination cards
    const destinationCards = document.querySelectorAll('.destination-card');
    
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.card-overlay').style.backgroundColor = 'rgba(215, 25, 32, 0.8)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.card-overlay').style.backgroundColor = '';
        });
    });
});

// In a real implementation, you would also include:
// - API calls for flight search
// - More sophisticated carousel/slider functionality
// - Form validation
// - User authentication flows
// - Booking management
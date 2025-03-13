document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Scroll animation
    const fadeElements = document.querySelectorAll('.fade-up');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }
    
    // Add visible class to elements in view on page load
    checkFade();
    
    // Check for elements entering view on scroll
    window.addEventListener('scroll', checkFade);
    
    // Header scroll effect
    const header = document.querySelector('.header');
    
    function checkScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Check header state on page load
    checkScroll();
    
    // Update header state on scroll
    window.addEventListener('scroll', checkScroll);
});
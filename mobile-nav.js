// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Insert hamburger menu button into the navbar
    navbar.insertBefore(menuToggle, navLinks);
    
    // Toggle menu visibility when clicking the hamburger button
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking a nav link (for better mobile UX)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Add scroll animations
    const scrollElements = document.querySelectorAll('.about-section, .nationwide-impact, #advisory, #eligibility, #structure, #syllabus, #awards, #dates');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('active');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('active');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 80)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Initialize elements with fade-in class
    scrollElements.forEach(el => {
        el.classList.add('fade-in');
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Trigger once on load
    handleScrollAnimation();
});

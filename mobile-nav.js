// JavaScript to handle mobile navigation menu
document.addEventListener("DOMContentLoaded", function() {
    // Create mobile menu button
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '☰';
    mobileMenuButton.setAttribute('aria-label', 'Toggle navigation menu');
    
    // Get the navbar element
    const navbar = document.querySelector('.navbar');
    
    // Add the button to the navbar
    navbar.appendChild(mobileMenuButton);
    
    // Get navigation links
    const navLinks = document.querySelector('.nav-links');
    
    // Function to toggle menu
    function toggleMenu() {
        navLinks.classList.toggle('active');
        
        // Change button text based on menu state
        if (navLinks.classList.contains('active')) {
            mobileMenuButton.innerHTML = '✕';
        } else {
            mobileMenuButton.innerHTML = '☰';
        }
    }
    
    // Add click event to toggle menu
    mobileMenuButton.addEventListener('click', toggleMenu);
    
    // Close menu when links are clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Close menu if clicked outside of navigation
    document.addEventListener('click', function(event) {
        const isNavButton = event.target.closest('.mobile-menu-button');
        const isNavMenu = event.target.closest('.nav-links');
        
        if (!isNavButton && !isNavMenu && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Adjust for window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuButton.innerHTML = '☰';
        }
    });
});

// Keep existing smooth scrolling code
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Adjust offset for mobile screens
            const offset = window.innerWidth <= 768 ? 60 : 80;
            
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    });
});
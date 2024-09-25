document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading');
    const mainContent = document.body;

    // Ensure main content is hidden initially
    mainContent.style.opacity = '0';
    loadingScreen.style.display = 'flex';

    // Show loading screen for 3 seconds
    setTimeout(() => {
        // Fade out loading screen
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease';

        // After loading screen fades out, hide it and show main content
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.opacity = '1';
            mainContent.style.transition = 'opacity 0.5s ease';
        }, 500);
    }, 3000);

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });

    // Subtle fade-in animation for content sections
    const fadeInElements = document.querySelectorAll('main section');
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });
});
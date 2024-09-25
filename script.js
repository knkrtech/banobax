document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading');
    const mainContent = document.querySelector('main');
    const glassmorphismBox = document.getElementById('glassmorphism-box');

    // Ensure loading screen is visible and main content is hidden initially
    loadingScreen.style.display = 'flex';
    mainContent.style.opacity = '0';
    mainContent.style.display = 'block'; // Change this from 'none' to 'block'

    // Simulate loading time
    setTimeout(() => {
        // Fade out loading screen
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease';

        // After loading screen fades out, hide it and show main content
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.opacity = '1';
            mainContent.style.transition = 'opacity 0.5s ease';
            document.body.classList.add('loaded');
        }, 500);
    }, 2000);  // Adjust this time as needed

    // Smooth scrolling and glassmorphism box animation for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Animate glassmorphism box
                glassmorphismBox.style.height = '100%';
                setTimeout(() => {
                    glassmorphismBox.style.height = '80px';
                }, 600);

                // Scroll to target section
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Update active link
                document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});

// Add this line outside of the event listener
console.log('Script file loaded');
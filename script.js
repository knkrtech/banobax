document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading');
    const mainContent = document.querySelector('main');

    // Ensure loading screen is visible
    loadingScreen.style.display = 'flex';
    mainContent.style.display = 'none';

    setTimeout(() => {
        // Fade out loading screen
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease';

        // After loading screen fades out, hide it and show main content
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
            document.body.classList.add('loaded');
        }, 500);
    }, 3000);

    // Add your original JavaScript here
});

// Add this line outside of the event listener
console.log('Script file loaded');
document.addEventListener('DOMContentLoaded', () => {
    const isHomePage = document.body.classList.contains('home-page');
    const loadingScreen = document.getElementById('loading');
    const mainContent = document.querySelector('main');

    if (isHomePage && loadingScreen) {
        // Loading screen logic for home page
        loadingScreen.style.display = 'flex';
        mainContent.style.opacity = '0';

        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 0.5s ease';

            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.style.opacity = '1';
                mainContent.style.transition = 'opacity 0.5s ease';
                document.body.classList.add('loaded');
            }, 500);
        }, 3000);  // Increased to 3 seconds to show the animation
    } else {
        // For other pages, hide loading screen and show content immediately
        if (loadingScreen) loadingScreen.style.display = 'none';
        if (mainContent) mainContent.style.opacity = '1';
        document.body.classList.add('loaded');
    }

    // Update active navigation item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(a => {
        if (a.getAttribute('href') === currentPage) {
            a.classList.add('active');
        } else {
            a.classList.remove('active');
        }
    });

    // Smooth scrolling for same-page links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Check if the link is to an external page
            if (targetId.includes('.html')) {
                // Allow default link behavior for external pages
                return;
            }

            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
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

console.log('Script file loaded');
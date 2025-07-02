// Language switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    const langSwitchers = document.querySelectorAll('.lang-switcher span');

    langSwitchers.forEach(switcher => {
        switcher.addEventListener('click', () => {
            langSwitchers.forEach(s => s.classList.remove('active'));
            switcher.classList.add('active');
            // Here you would implement the actual language change logic
            // For a static site, this might involve redirecting to a different page
            // or dynamically changing content based on the selected language.
            // For now, it just changes the active state.
            console.log('Language switched to:', switcher.dataset.lang);
        });
    });

    // Dark mode switcher functionality
    const themeSwitcher = document.querySelector('.theme-switcher i');
    const body = document.body;

    // Load theme preference from localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeSwitcher.classList.remove('fa-moon');
            themeSwitcher.classList.add('fa-sun');
        } else {
            themeSwitcher.classList.remove('fa-sun');
            themeSwitcher.classList.add('fa-moon');
        }
    } else {
        // Default to dark mode if no preference is set
        body.classList.add('dark-mode');
        themeSwitcher.classList.remove('fa-moon');
        themeSwitcher.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark-mode'); // Save dark mode as default
    }

    themeSwitcher.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            themeSwitcher.classList.remove('fa-sun');
            themeSwitcher.classList.add('fa-moon');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.add('dark-mode');
            themeSwitcher.classList.remove('fa-moon');
            themeSwitcher.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // Smooth scrolling for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

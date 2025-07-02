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

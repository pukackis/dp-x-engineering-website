// Language switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    const langSwitchers = document.querySelectorAll('.lang-switcher span');

    langSwitchers.forEach(switcher => {
        switcher.addEventListener('click', () => {
            const selectedLang = switcher.dataset.lang;
            let path = window.location.pathname;
            // Remove current language directory from path
            path = path.replace(/\/(en|de|pl)\//, '/');
            // Redirect to the new language version
            window.location.href = `/${selectedLang}${path}`;
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
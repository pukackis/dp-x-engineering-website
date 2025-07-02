// Language switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    const langSwitchers = document.querySelectorAll('.lang-switcher span');

    langSwitchers.forEach(switcher => {
        switcher.addEventListener('click', () => {
            const selectedLang = switcher.dataset.lang;
            const pathParts = window.location.pathname.split('/');
            // Assuming URL structure is /repo-name/lang/page.html
            // pathParts[0] is empty
            // pathParts[1] is repo-name
            // pathParts[2] is current language (en, de, pl)
            pathParts[2] = selectedLang; // Update language part
            const newPathname = pathParts.join('/');
            window.location.href = window.location.origin + newPathname;
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

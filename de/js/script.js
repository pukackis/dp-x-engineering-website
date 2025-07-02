// Language switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    const langSwitchers = document.querySelectorAll('.lang-switcher span');

    langSwitchers.forEach(switcher => {
        switcher.addEventListener('click', () => {
            const selectedLang = switcher.dataset.lang;
            const pathParts = window.location.pathname.split('/').filter(part => part !== '');
            
            // Assuming URL structure is /repo-name/lang/page.html
            // pathParts[0] is repo-name
            // pathParts[1] is current language (en, de, pl)
            
            const repoName = pathParts[0];
            const currentPagePath = pathParts.slice(2).join('/'); // Get path after language

            const newPathname = `/${repoName}/${selectedLang}/${currentPagePath}`;
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
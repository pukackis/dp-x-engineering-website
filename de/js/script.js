// Language switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    const langSwitchers = document.querySelectorAll('.lang-switcher span');

    langSwitchers.forEach(switcher => {
        switcher.addEventListener('click', () => {
            const selectedLang = switcher.dataset.lang;
            const pathParts = window.location.pathname.split('/').filter(part => part !== '');
            let newPathname;

            // Check if the first part of the path is a language code (e.g., 'en', 'de', 'pl')
            // This indicates a root deployment (like on Hostinger)
            if (['en', 'de', 'pl'].includes(pathParts[0])) {
                const currentPagePath = pathParts.slice(1).join('/'); // Get path after language
                newPathname = `/${selectedLang}/${currentPagePath}`;
            } else {
                // Assuming it's a GitHub Pages-like structure: /repo-name/lang/page.html
                const repoName = pathParts[0];
                const currentPagePath = pathParts.slice(2).join('/'); // Get path after language
                newPathname = `/${repoName}/${selectedLang}/${currentPagePath}`;
            }
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
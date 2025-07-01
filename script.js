// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Dark Mode Toggle Logic
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Dynamic Content Loading
    const lang = document.documentElement.lang || 'en'; // Get current language

    console.log('Attempting to fetch data.json...');
    fetch('data.json')
        .then(response => {
            console.log('Response received for data.json:', response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data parsed from data.json:', data);

            // Render Portfolio Items
            const portfolioContainer = document.getElementById('portfolio-items');
            console.log('Rendering portfolio items...');
            data.portfolioItems.forEach(item => {
                console.log('Processing portfolio item:', item.title_en);
                const div = document.createElement('div');
                div.className = 'relative group rounded-xl shadow-xl overflow-hidden fade-in transform hover:scale-105 transition duration-300';

                const img = document.createElement('img');
                img.src = item.image;
                img.alt = lang === 'en' ? item.title_en : item.title_de;
                img.className = 'w-full h-64 object-cover transition duration-300 transform group-hover:scale-110';
                div.appendChild(img);

                const overlayDiv = document.createElement('div');
                overlayDiv.className = 'absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300';

                const h3 = document.createElement('h3');
                h3.className = 'text-white text-2xl font-bold text-center px-4';
                h3.textContent = lang === 'en' ? item.title_en : item.title_de;
                overlayDiv.appendChild(h3);

                div.appendChild(overlayDiv);
                portfolioContainer.appendChild(div);
            });
            console.log('Finished rendering portfolio items.');

            // Render Blog Posts
            const blogContainer = document.getElementById('blog-posts');
            console.log('Rendering blog posts...');
            data.blogPosts.forEach(post => {
                console.log('Processing blog post:', post.title_en);
                const div = document.createElement('div');
                div.className = 'bg-white rounded-xl shadow-xl overflow-hidden fade-in transform hover:scale-105 transition duration-300';

                const img = document.createElement('img');
                img.src = post.image;
                img.alt = lang === 'en' ? post.title_en : post.title_de;
                img.className = 'w-full h-56 object-cover';
                div.appendChild(img);

                const pDiv = document.createElement('div');
                pDiv.className = 'p-8';

                const h3 = document.createElement('h3');
                h3.className = 'text-2xl font-bold mb-3 text-gray-800';
                h3.textContent = lang === 'en' ? post.title_en : post.title_de;
                pDiv.appendChild(h3);

                const dateP = document.createElement('p');
                dateP.className = 'text-gray-600 text-sm mb-4';
                dateP.textContent = `Date: ${lang === 'en' ? post.date_en : post.date_de}`;
                pDiv.appendChild(dateP);

                const excerptP = document.createElement('p');
                excerptP.className = 'text-gray-700 leading-relaxed';
                excerptP.textContent = lang === 'en' ? post.excerpt_en : post.excerpt_de;
                pDiv.appendChild(excerptP);

                const a = document.createElement('a');
                a.href = '#'; // Placeholder for actual blog post link
                a.className = 'text-teal-accent hover:underline mt-5 inline-block font-semibold';
                a.textContent = 'Read More →';
                pDiv.appendChild(a);

                div.appendChild(pDiv);
                blogContainer.appendChild(div);
            });
            console.log('Finished rendering blog posts.');

            // Re-observe faders after content is loaded
            faders.forEach(fader => {
                appearOnScroll.observe(fader);
            });
        })
        .catch(error => console.error('Error loading data:', error));
});
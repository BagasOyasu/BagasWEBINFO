const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.onclick = () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            const target = document.querySelector(href);
            if(target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 90, behavior: 'smooth' });
            }
        }
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.scroll-box').forEach(box => observer.observe(box));
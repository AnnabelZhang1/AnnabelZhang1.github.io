const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const darkModeToggle = document.querySelector(".dark-mode-toggle");

// Apply saved theme when the page loads
try {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
} catch (e) {}

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('display-menu');
});

darkModeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {}
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Gallery item click -> open detail page
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = item.getAttribute('data-project');
        const detailPage = document.getElementById(projectId);
        if (detailPage) {
            detailPage.classList.add('active');
            document.body.style.overflow = 'hidden';
            // Scroll detail page to top
            detailPage.scrollTop = 0;
        }
    });
});

// Close detail page
function closeDetail() {
    document.querySelectorAll('.project-detail-page.active').forEach(page => {
        page.classList.remove('active');
    });
    document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDetail();
});
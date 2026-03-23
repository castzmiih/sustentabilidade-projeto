// Função para animar a entrada do conteúdo ao scroll
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('.content').classList.add('active');
        }
    });
}, observerOptions);

// Aplica o observador a todos os slides
document.querySelectorAll('.slide').forEach(slide => {
    observer.observe(slide);
});

// Scroll Suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
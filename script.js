document.addEventListener('DOMContentLoaded', () => {
    
    // Toggle Sidebar no Mobile (Se houver botão)
    // Para simplificar, focamos na leitura desktop, mas aqui está a lógica caso precise
    
    // Theme Switcher
    const themeBtn = document.getElementById('themeBtn');
    const html = document.documentElement;
    
    // Check local storage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    
    themeBtn.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

    // Smooth Scroll para links do menu
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
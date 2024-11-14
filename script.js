document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    let darkMode = localStorage.getItem('dark-mode') === 'true';

    const setTheme = (isDark) => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '🌜' : '🌞';
    };

    themeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        localStorage.setItem('dark-mode', darkMode);
        setTheme(darkMode);
    });

    setTheme(darkMode);
});

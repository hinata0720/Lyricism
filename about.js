document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', 
                hamburger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        });

        // メニュー項目がクリックされたときにメニューを閉じる
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        // メニュー外をクリックしたときにメニューを閉じる
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
                navMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }
});